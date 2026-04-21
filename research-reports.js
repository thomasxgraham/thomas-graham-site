const reportPages = (slug, count) =>
  Array.from({ length: count }, (_, index) => `./assets/research-reports/${slug}/page-${String(index + 1).padStart(2, "0")}.png`);

window.RESEARCH_REPORTS = [
  {
    slug: "chat-assistant-study",
    title: "Chat Assistant Study",
    date: "April 7, 2020",
    studyType: "Attitudinal survey report-out",
    summary:
      "A formal research readout capturing how ACA patients responded to virtual chat assistants, where automation felt helpful, and where it risked undermining trust in Care Advocacy.",
    findings: [
      "Patients preferred clear communication before the assistant appeared in care flows.",
      "The ability to bypass the assistant and reach a human remained the strongest value signal.",
      "Immediate answers and 24/7 availability were appealing only when human help stayed close at hand.",
      "Starting with chat felt more tolerable than handing patients off from a human into automation.",
      "Transfer-to-automation moments exposed the strongest trust risk in the experience."
    ],
    previewImage: "./assets/research-reports/chat-assistant-study/page-01.png",
    linkedCaseStudyHref: "./virtual-chat-assistant-study.html",
    pages: ["./assets/research-reports/chat-assistant-study/full-report.png"]
  },
  {
    slug: "digital-acceleration-study",
    title: "Digital Acceleration Study",
    date: "April 7, 2020",
    studyType: "Digital adoption report-out",
    summary:
      "A formal artifact examining where digital behaviors could accelerate across the experience, what confidence signals were missing, and how adoption could grow without feeling forced.",
    findings: [
      "Acceleration depended on reducing uncertainty at key moments of commitment.",
      "Patients needed clearer reassurance before adopting newer digital paths.",
      "Human support still mattered even when the goal was stronger digital uptake."
    ],
    previewImage: "./assets/research-reports/digital-acceleration-study/page-01.png",
    pages: ["./assets/research-reports/digital-acceleration-study/full-report.png"]
  },
  {
    slug: "insurance-payment-study",
    title: "Insurance Payment Study",
    date: "April 16, 2020",
    studyType: "Billing and coverage report-out",
    summary:
      "A report-out focused on how insurance and payment expectations shaped trust, where billing language became hard to parse, and what the team needed to clarify in the experience.",
    findings: [
      "Coverage and billing terminology needed plainer framing.",
      "Confidence improved when next steps and responsibility were made explicit.",
      "Ambiguity around cost and payment timing introduced avoidable friction."
    ],
    previewImage: "./assets/research-reports/insurance-payment-study/page-01.png",
    pages: ["./assets/research-reports/insurance-payment-study/full-report.png"]
  },
  {
    slug: "app-features-and-icons",
    title: "App Features and Icons",
    date: "May 11, 2020",
    studyType: "Feature concept review",
    summary:
      "A team-facing review of candidate app features and iconography, used to align on comprehension risk, naming clarity, and where visual shorthand still needed stronger support.",
    findings: [
      "Feature value needed to stay grounded in patient usefulness, not just breadth.",
      "Icon-only communication risked ambiguity without supportive labeling.",
      "The artifact helped separate what was clear enough to move forward from what still needed refinement."
    ],
    previewImage: "./assets/research-reports/app-features-and-icons/page-01.png",
    pages: ["./assets/research-reports/app-features-and-icons/full-report.png"]
  },
  {
    slug: "ivr-flow",
    title: "IVR Flow",
    date: "May 19, 2020",
    studyType: "Service-flow analysis",
    summary:
      "A formal report-out on IVR structure and routing logic, highlighting where call flows became harder to follow and where callers needed better orientation or recovery paths.",
    findings: [
      "Routing language needed to be clearer at the start of the flow.",
      "Recovery paths mattered when callers realized they were in the wrong branch.",
      "The report helped the team align on where the IVR created avoidable friction."
    ],
    previewImage: "./assets/research-reports/ivr-flow/page-01.png",
    pages: ["./assets/research-reports/ivr-flow/full-report.png"]
  },
  {
    slug: "digital-intake-study",
    title: "Digital Intake Study",
    date: "June 2, 2020",
    studyType: "Digital intake report-out",
    summary:
      "A formal artifact covering digital intake readiness, how effort was perceived across the flow, and what needed to feel clearer for patients to stay engaged through completion.",
    findings: [
      "Perceived effort had a direct effect on willingness to complete intake digitally.",
      "Progress visibility and step framing mattered as much as the form content itself.",
      "Trust improved when intake felt preparatory and useful rather than burdensome."
    ],
    previewImage: "./assets/research-reports/digital-intake-study/page-01.png",
    pages: ["./assets/research-reports/digital-intake-study/full-report.png"]
  },
  {
    slug: "wayfinding-report",
    title: "Wayfinding Report",
    date: "Undated artifact",
    studyType: "Wayfinding evaluation report",
    summary:
      "A report-out focused on navigation and arrival experience, translating field observations into clearer priorities around signage, terminology, and major decision points.",
    findings: [
      "Wayfinding often broke down at major decision points rather than across the entire trip.",
      "Terminology, landmarks, and signage needed to work together more clearly.",
      "The artifact turns field evidence into a more actionable set of wayfinding priorities."
    ],
    previewImage: "./assets/research-reports/wayfinding-report/page-01.png",
    pdfSrc: "./assets/research-reports/wayfinding-report/wayfinding-report.pdf",
    pages: []
  }
];

(() => {
  const app = document.querySelector("[data-research-reports-app]");
  const reports = window.RESEARCH_REPORTS || [];

  if (!app || reports.length === 0) {
    return;
  }

  const grid = app.querySelector("[data-report-grid]");
  const modal = document.querySelector("[data-report-modal]");
  const dialog = modal?.querySelector(".reports-modal-dialog");
  const pagesRoot = modal?.querySelector("[data-modal-pages]");
  const viewport = modal?.querySelector("[data-modal-viewport]");
  const titleNode = modal?.querySelector("[data-modal-title]");
  const dateNode = modal?.querySelector("[data-modal-date]");
  const typeNode = modal?.querySelector("[data-modal-study-type]");
  const summaryNode = modal?.querySelector("[data-modal-summary]");
  const findingsNode = modal?.querySelector("[data-modal-findings]");
  const caseStudyLink = modal?.querySelector("[data-modal-case-study]");
  const closeTriggers = modal?.querySelectorAll("[data-report-close]") || [];

  let lastFocusedElement = null;

  function renderGrid() {
    if (!grid) {
      return;
    }

    grid.innerHTML = reports
      .map((report, index) => {
        const staggerClass = index % 2 === 1 ? " report-preview-tile-shifted" : "";

        return `
          <a
            class="report-preview-tile${staggerClass}"
            href="${report.pages[0]}"
            data-report-open="${report.slug}"
          >
            <figure class="report-preview-figure">
              <div class="report-preview-frame">
                <div class="report-page-frame">
                  <img
                    src="${report.previewImage}"
                    alt="Preview of the ${report.title} report"
                    loading="lazy"
                  />
                </div>
              </div>
              <figcaption class="report-preview-meta">
                <span class="report-preview-title">${report.title}</span>
                <span class="report-preview-line">${report.date} · ${report.studyType}</span>
              </figcaption>
            </figure>
          </a>
        `;
      })
      .join("");
  }

  function renderModal(report) {
    if (!modal || !pagesRoot || !titleNode || !dateNode || !typeNode || !summaryNode || !findingsNode) {
      return;
    }

    titleNode.textContent = report.title;
    dateNode.textContent = report.date;
    typeNode.textContent = report.studyType;
    summaryNode.textContent = report.summary;
    findingsNode.innerHTML = report.findings.map((finding) => `<li>${finding}</li>`).join("");

    if (caseStudyLink) {
      if (report.linkedCaseStudyHref) {
        caseStudyLink.hidden = false;
        caseStudyLink.href = report.linkedCaseStudyHref;
      } else {
        caseStudyLink.hidden = true;
        caseStudyLink.removeAttribute("href");
      }
    }

    viewport?.classList.toggle("reports-modal-viewport-pdf", Boolean(report.pdfSrc));

    if (report.pdfSrc) {
      pagesRoot.innerHTML = `
        <div class="report-pdf-frame">
          <iframe
            src="${report.pdfSrc}#view=FitH"
            title="${report.title} PDF report"
            loading="eager"
          ></iframe>
        </div>
      `;
    } else {
      pagesRoot.innerHTML = report.pages
        .map(
          (page, index) => `
            <figure class="report-page-frame">
              <img src="${page}" alt="${report.title} report page ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" />
            </figure>
          `
        )
        .join("");
    }

    viewport?.scrollTo({ top: 0, behavior: "auto" });
  }

  function getFocusableElements() {
    if (!modal) {
      return [];
    }

    return Array.from(
      modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter((element) => !element.hasAttribute("hidden"));
  }

  function trapFocus(event) {
    if (event.key !== "Tab" || !modal || modal.hidden) {
      return;
    }

    const focusable = getFocusableElements();
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openReport(slug) {
    const report = reports.find((item) => item.slug === slug);
    if (!report || !modal) {
      return;
    }

    lastFocusedElement = document.activeElement;
    renderModal(report);
    modal.hidden = false;
    document.body.classList.add("reports-modal-open");
    modal.addEventListener("keydown", trapFocus);

    const closeButton = modal.querySelector(".report-modal-close");
    closeButton?.focus();
  }

  function closeReport() {
    if (!modal || modal.hidden) {
      return;
    }

    modal.hidden = true;
    document.body.classList.remove("reports-modal-open");
    modal.removeEventListener("keydown", trapFocus);

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  grid?.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-report-open]");
    if (!trigger) {
      return;
    }

    event.preventDefault();
    const slug = trigger.getAttribute("data-report-open");
    if (slug) {
      openReport(slug);
    }
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener("click", closeReport);
  });

  dialog?.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  modal?.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.matches(".reports-modal")) {
      closeReport();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal?.hidden) {
      closeReport();
    }
  });

  renderGrid();
})();
