(() => {
  const CONTACT_EMAIL = "hello@thomas-graham.me";
  const FORM_ENDPOINT = "./mail/contact_me.php";
  const SUBJECT_BY_PAGE = {
    "index.html": "General inquiry",
    "about.html": "Question about working together",
    "case-study.html": "Question about selected work",
    "research.html": "Question about research",
    "product-design.html": "Question about product design",
    "other-work.html": "Question about other work",
    "research-reports.html": "Question about research reports",
  };

  const style = document.createElement("style");
  style.textContent = `
    .contact-modal[hidden] { display: none; }
    .contact-modal {
      position: fixed;
      inset: 0;
      z-index: 70;
      display: grid;
      place-items: center;
      padding: 20px;
    }
    .contact-modal-backdrop {
      position: absolute;
      inset: 0;
      background: rgba(19, 15, 11, 0.52);
      backdrop-filter: blur(4px);
    }
    .contact-modal-dialog {
      position: relative;
      z-index: 1;
      width: min(100%, 680px);
      max-height: calc(100dvh - 40px);
      overflow: auto;
      display: grid;
      gap: 18px;
      padding: clamp(20px, 4vw, 28px);
      border-radius: 30px;
      border: 1px solid rgba(86, 78, 68, 0.18);
      background:
        radial-gradient(circle at top, rgba(255, 255, 255, 0.68), transparent 32%),
        linear-gradient(180deg, rgba(248, 243, 235, 0.98) 0%, rgba(239, 231, 219, 0.98) 100%);
      box-shadow: 0 28px 58px rgba(18, 14, 10, 0.22);
    }
    .contact-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 18px;
    }
    .contact-modal-title {
      margin: 0;
      color: #1c1714;
      font-family: Iowan Old Style, "Palatino Linotype", "Book Antiqua", Palatino, serif;
      font-size: clamp(2rem, 5vw, 3rem);
      line-height: 0.94;
      letter-spacing: -0.045em;
      font-weight: 400;
    }
    .contact-modal-close {
      appearance: none;
      border: 1px solid rgba(86, 78, 68, 0.18);
      background: rgba(255, 255, 255, 0.74);
      color: #544c44;
      border-radius: 999px;
      width: 40px;
      height: 40px;
      font: inherit;
      font-size: 1.15rem;
      cursor: pointer;
    }
    .contact-modal-kicker {
      color: #9e9385;
      font-size: 0.76rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    .contact-modal-support,
    .contact-modal-label,
    .contact-modal-note,
    .contact-modal-status {
      color: #5f574f;
      font-size: 0.96rem;
      line-height: 1.55;
    }
    .contact-modal-label {
      display: grid;
      gap: 8px;
      font-size: 0.9rem;
      color: #4d463f;
    }
    .contact-modal-form {
      display: grid;
      gap: 14px;
    }
    .contact-modal-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }
    .contact-modal-input,
    .contact-modal-textarea {
      width: 100%;
      border: 1px solid rgba(86, 78, 68, 0.18);
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.8);
      color: #221d17;
      font: inherit;
      font-size: 1rem;
      line-height: 1.5;
      padding: 14px 16px;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .contact-modal-textarea {
      min-height: 150px;
      resize: vertical;
    }
    .contact-modal-input:focus,
    .contact-modal-textarea:focus {
      outline: none;
      border-color: rgba(255, 126, 99, 0.56);
      box-shadow: 0 0 0 3px rgba(255, 126, 99, 0.18);
    }
    .contact-modal-meta {
      display: grid;
      gap: 6px;
      padding: 14px 16px;
      border-radius: 18px;
      border: 1px solid rgba(86, 78, 68, 0.14);
      background: rgba(255, 255, 255, 0.54);
    }
    .contact-modal-subject {
      color: #1c1714;
      font-size: 1rem;
      line-height: 1.4;
      font-weight: 600;
    }
    .contact-modal-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding-top: 4px;
    }
    .contact-modal-submit {
      appearance: none;
      border: 0;
      border-radius: 999px;
      background: #ff9a81;
      color: #1a1310;
      padding: 13px 20px;
      font: inherit;
      font-size: 0.98rem;
      cursor: pointer;
    }
    .contact-modal-submit[disabled] {
      opacity: 0.62;
      cursor: wait;
    }
    .contact-modal-status {
      min-height: 1.5em;
    }
    .contact-modal-status[data-state="success"] {
      color: #285e32;
    }
    .contact-modal-status[data-state="error"] {
      color: #8f3a2f;
    }
    .contact-modal-fallback {
      color: #7b6f64;
      font-size: 0.88rem;
    }
    .contact-modal-fallback a {
      color: inherit;
      text-decoration: underline;
    }
    .contact-modal-visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    body.contact-modal-open {
      overflow: hidden;
    }
    @media (max-width: 640px) {
      .contact-modal {
        padding: 12px;
      }
      .contact-modal-dialog {
        border-radius: 24px;
        padding: 18px;
      }
      .contact-modal-grid {
        grid-template-columns: 1fr;
      }
      .contact-modal-actions {
        align-items: start;
      }
    }
  `;
  document.head.appendChild(style);

  const modal = document.createElement("div");
  modal.className = "contact-modal";
  modal.hidden = true;
  modal.innerHTML = `
    <div class="contact-modal-backdrop" data-contact-close></div>
    <div class="contact-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <div class="contact-modal-head">
        <div>
          <div class="contact-modal-kicker">Contact</div>
          <h2 class="contact-modal-title" id="contact-modal-title">Start the conversation.</h2>
        </div>
        <button class="contact-modal-close" type="button" aria-label="Close contact form" data-contact-close>×</button>
      </div>
      <p class="contact-modal-support">
        I’ll take care of the context. You just need to leave the basics so I can follow up.
      </p>
      <form class="contact-modal-form" novalidate>
        <div class="contact-modal-meta">
          <div class="contact-modal-kicker">Subject</div>
          <div class="contact-modal-subject" data-contact-subject-label></div>
          <div class="contact-modal-note" data-contact-origin-label></div>
        </div>
        <div class="contact-modal-grid">
          <label class="contact-modal-label">
            Name
            <input class="contact-modal-input" type="text" name="name" autocomplete="name" required />
          </label>
          <label class="contact-modal-label">
            Email
            <input class="contact-modal-input" type="email" name="email" autocomplete="email" required />
          </label>
        </div>
        <label class="contact-modal-label">
          Message
          <textarea class="contact-modal-textarea" name="message" required></textarea>
        </label>
        <label class="contact-modal-visually-hidden" aria-hidden="true">
          Leave this field empty
          <input type="text" name="website" tabindex="-1" autocomplete="off" />
        </label>
        <input type="hidden" name="subject" />
        <input type="hidden" name="origin" />
        <input type="hidden" name="page_url" />
        <input type="hidden" name="page_title" />
        <div class="contact-modal-actions">
          <button class="contact-modal-submit" type="submit">Send message</button>
          <div class="contact-modal-status" data-contact-status></div>
        </div>
        <div class="contact-modal-fallback" data-contact-fallback hidden></div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  const form = modal.querySelector("form");
  const statusNode = modal.querySelector("[data-contact-status]");
  const fallbackNode = modal.querySelector("[data-contact-fallback]");
  const subjectInput = form.elements.subject;
  const originInput = form.elements.origin;
  const pageUrlInput = form.elements.page_url;
  const pageTitleInput = form.elements.page_title;
  const subjectLabel = modal.querySelector("[data-contact-subject-label]");
  const originLabel = modal.querySelector("[data-contact-origin-label]");
  const submitButton = form.querySelector(".contact-modal-submit");

  let activeTrigger = null;

  function getPageKey() {
    const raw = window.location.pathname.split("/").pop();
    return raw || "index.html";
  }

  function decodeMailtoSubject(href) {
    try {
      const normalized = href.replace(/^mailto:/i, "mailto://");
      const parsed = new URL(normalized);
      const subject = parsed.searchParams.get("subject");
      return subject ? decodeURIComponent(subject) : "";
    } catch (error) {
      const match = href.match(/[?&]subject=([^&]+)/i);
      return match ? decodeURIComponent(match[1]) : "";
    }
  }

  function inferSubject(trigger) {
    const href = trigger.getAttribute("href") || "";
    const explicit = trigger.dataset.contactSubject || decodeMailtoSubject(href);
    if (explicit) return explicit;

    const text = trigger.textContent.toLowerCase();
    if (text.includes("coffee")) return "Let's talk over a cup of coffee";

    return SUBJECT_BY_PAGE[getPageKey()] || "General inquiry";
  }

  function inferOrigin() {
    const title = document.querySelector("h1.page-title")?.textContent?.trim();
    if (title) return `Started from ${title}`;
    return `Started from ${document.title.replace(/\s+—.*$/, "")}`;
  }

  function buildFallbackMailto() {
    const params = new URLSearchParams({
      subject: subjectInput.value,
      body:
        `Name: ${form.elements.name.value}\n` +
        `Email: ${form.elements.email.value}\n\n` +
        `${form.elements.message.value}`,
    });
    return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
  }

  function resetStatus() {
    statusNode.textContent = "";
    statusNode.removeAttribute("data-state");
    fallbackNode.hidden = true;
    fallbackNode.innerHTML = "";
  }

  function openModal(trigger) {
    activeTrigger = trigger;
    resetStatus();
    const subject = inferSubject(trigger);
    const origin = inferOrigin();

    subjectInput.value = subject;
    originInput.value = origin;
    pageUrlInput.value = window.location.href;
    pageTitleInput.value = document.title;
    subjectLabel.textContent = subject;
    originLabel.textContent = origin;

    modal.hidden = false;
    document.body.classList.add("contact-modal-open");
    window.setTimeout(() => form.elements.name.focus(), 0);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("contact-modal-open");
    if (activeTrigger) {
      activeTrigger.focus();
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    resetStatus();

    if (!form.reportValidity()) return;

    submitButton.disabled = true;
    submitButton.textContent = "Sending…";

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      let payload = {};
      try {
        payload = await response.json();
      } catch (error) {
        payload = {};
      }

      if (!response.ok || payload.ok === false) {
        throw new Error(payload.message || "The message could not be sent.");
      }

      statusNode.dataset.state = "success";
      statusNode.textContent = payload.message || "Thanks — I’ll follow up by email.";
      form.reset();
      subjectInput.value = subjectLabel.textContent;
      originInput.value = originLabel.textContent;
      pageUrlInput.value = window.location.href;
      pageTitleInput.value = document.title;
      window.setTimeout(closeModal, 1200);
    } catch (error) {
      statusNode.dataset.state = "error";
      statusNode.textContent = "The form couldn’t send from the browser right now.";
      fallbackNode.hidden = false;
      fallbackNode.innerHTML = `You can still <a href="${buildFallbackMailto()}">send this through your email app</a>.`;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send message";
    }
  }

  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-contact-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.hidden && event.key === "Escape") {
      closeModal();
    }
  });

  form.addEventListener("submit", handleSubmit);

  const triggerSelector = [
    `a[href^="mailto:${CONTACT_EMAIL}"]`,
    'a[href="#contact"]',
  ].join(",");

  document.querySelectorAll(triggerSelector).forEach((trigger) => {
    const href = trigger.getAttribute("href") || "";
    const text = trigger.textContent.toLowerCase();
    const isCoffee = href === "#contact" && text.includes("coffee");
    const isMailto = href.startsWith(`mailto:${CONTACT_EMAIL}`);

    if (!isCoffee && !isMailto) return;

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(trigger);
    });
  });
})();
