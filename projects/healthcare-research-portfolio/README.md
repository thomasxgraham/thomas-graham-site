# Healthcare research portfolio

This directory preserves the Next.js source for Thomas Graham's editorial healthcare research
portfolio. It is a public-facing interpretation layer, not the authoritative source archive for
the underlying studies.

## Included case studies

1. Telephony Data Analysis
2. Wayfinding Report Out
3. Discovery Study on the Zocdoc Experience
4. Onboarding Experience Evaluation
5. Connect Records Prototype Findings
6. Hope 3.0 Findings
7. Initial Wholeness Findings
8. Wholeness Moderated and Unmoderated Findings
9. MyChart Bedside ED Onboarding
10. App Features and Icons
11. Chat Assistant Study

The case-study definitions live in [`lib/site-data.ts`](lib/site-data.ts), with normalized report
text under [`content/report-text`](content/report-text/). The snapshot intentionally excludes raw
participant data, recordings, local build output, resumes, and unrelated legacy-site files.

## Run locally

```bash
npm ci
npm run dev
```

## Validate

```bash
npm run typecheck
npm run build
```
