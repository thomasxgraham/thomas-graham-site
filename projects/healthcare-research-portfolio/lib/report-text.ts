import { readFileSync } from "node:fs";
import path from "node:path";

const reportTextMap: Record<string, string> = {
  "telephony-data-analysis": "telephony-data-analysis.txt",
  "wayfinding-report-out": "wayfinding-report-out.txt",
  "zocdoc-discovery-study": "zocdoc-discovery-study.txt",
  "onboarding-experience-evaluation": "onboarding-experience-evaluation.txt",
  "connect-records-findings": "connect-records-findings.txt",
  "hope-3-findings": "hope-3-findings.txt",
  "initial-wholeness-findings": "initial-wholeness-findings.txt",
  "wholeness-mixed-method-findings": "wholeness-mixed-method-findings.txt",
  "mychart-bedside-ed-onboarding": "mychart-bedside-ed-onboarding.txt",
};

const sectionHeadings = [
  "Executive Summary",
  "Introduction",
  "Methodology",
  "Key Findings",
  "Current Landscape",
  "Willingness to Use Indoor Navigation",
  "What Matters Most When Navigating",
  "Whole Journey Needs",
  "Live Location Value and Risks",
  "Lag and drift reduce trust and increase stress",
  "More screen-checking, less awareness",
  "Implications for design",
  "Adoption Considerations",
  "Vendor Comparison",
  "Recommendations",
  "Conclusion",
  "Considerations",
  "Where the issues present themselves",
  "Sorting Search Results",
  "Map Features of ZocDoc",
  "Ratings and Reviews",
  "Sponsored Listings in Search Results",
  "Guided Search",
  "Overall Impressions of ZocDoc",
  "Use of AI and Voice Input for Searching",
  "Cross-selling",
  "Looking for Other Services While Searching for a Provider",
];

const sectionPattern = new RegExp(
  `\\s+(${sectionHeadings.map(escapeRegExp).join("|")})\\s+`,
  "g",
);

export type ReportBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullet"; text: string };

function reportPath(filename: string) {
  return path.join(process.cwd(), "content", "report-text", filename);
}

export function getReportText(slug: string) {
  const filename = reportTextMap[slug];

  if (!filename) {
    return null;
  }

  try {
    return readFileSync(reportPath(filename), "utf8").trim();
  } catch {
    return null;
  }
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeInline(text: string) {
  return text
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:?!])/g, "$1")
    .replace(/\s+-(?=\w)/g, "-")
    .replace(/([“‘(])\s+/g, "$1")
    .replace(/\s+([”’)])/g, "$1")
    .replace(/MF\s*A/gi, "MFA")
    .replace(/2F\s*A/gi, "2FA")
    .replace(/A\s*TMs/g, "ATMs")
    .replace(/system'\s*s/gi, "system's")
    .replace(/service'\s*s/gi, "service's")
    .replace(/what'\s*s/gi, "what's")
    .replace(/it'\s*s/gi, "it's")
    .replace(/couldreduce/gi, "could reduce")
    .replace(/whyaccess/gi, "why access")
    .replace(/Howthe/g, "How the")
    .trim();
}

function insertSectionBreaks(text: string) {
  return text
    .replace(/•\s*/g, "\n• ")
    .replace(/📌\s*/g, "\n")
    .replace(/\s+(Stage \d+)\s+/g, "\n\n$1\n")
    .replace(/\s+(Table of contents)\s+/gi, "\n\n$1\n")
    .replace(sectionPattern, "\n\n$1\n");
}

function isHeadingLine(line: string) {
  const clean = normalizeInline(line.replace(/:$/, ""));

  if (!clean || clean.startsWith("•")) {
    return false;
  }

  if (/^Stage \d+/i.test(clean)) {
    return true;
  }

  if (line.endsWith(":") && clean.split(" ").length <= 8) {
    return true;
  }

  return sectionHeadings.some(
    (heading) => heading.toLowerCase() === clean.toLowerCase(),
  );
}

export function getReportBlocks(text: string): ReportBlock[] {
  const normalizedText = insertSectionBreaks(text).replace(/\r/g, "");
  const lines = normalizedText.split("\n").map((line) => line.trim());
  const blocks: ReportBlock[] = [];
  let paragraph = "";
  let bullet = "";

  const flushParagraph = () => {
    const clean = normalizeInline(paragraph);

    if (clean) {
      blocks.push({ type: "paragraph", text: clean });
    }

    paragraph = "";
  };

  const flushBullet = () => {
    const clean = normalizeInline(bullet);

    if (clean) {
      blocks.push({ type: "bullet", text: clean });
    }

    bullet = "";
  };

  for (const line of lines) {
    if (!line) {
      flushBullet();
      flushParagraph();
      continue;
    }

    if (isHeadingLine(line)) {
      flushBullet();
      flushParagraph();
      blocks.push({ type: "heading", text: normalizeInline(line.replace(/:$/, "")) });
      continue;
    }

    if (line.startsWith("•")) {
      flushParagraph();
      flushBullet();
      bullet = line.replace(/^•\s*/, "");
      continue;
    }

    if (bullet) {
      bullet = `${bullet} ${line}`;
      continue;
    }

    paragraph = paragraph ? `${paragraph} ${line}` : line;
  }

  flushBullet();
  flushParagraph();

  return blocks;
}
