/* Renders the page from window.SITE (data.js). You shouldn't need to edit this. */
(function () {
  const S = window.SITE || {};
  const P = S.profile || {};
  const $ = (id) => document.getElementById(id);
  const has = (v) => v !== undefined && v !== null && String(v).trim() !== "";
  const list = (a) => (Array.isArray(a) ? a : []);

  const ICONS = {
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 9l11 7 9-5.73V17h2V9L12 2Zm-6.5 11.2V17c0 1.66 2.91 3 6.5 3s6.5-1.34 6.5-3v-3.8L12 17.3l-6.5-4.1Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21h-4V9.5Z"/></svg>',
    cv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>'
  };
  const LINK_LABELS = { email: "Email", github: "GitHub", scholar: "Google Scholar", linkedin: "LinkedIn", cv: "CV" };

  const el = (tag, attrs = {}, html) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === false || v === null || v === undefined) continue;
      if (k === "class") n.className = v; else n.setAttribute(k, v === true ? "" : v);
    }
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const extLink = (url) => /^https?:/.test(url) ? { target: "_blank", rel: "noopener" } : {};

  /* ---------------- hero ---------------- */
  document.title = P.name || document.title;
  $("name").textContent = P.name || "";
  $("topbar-name").textContent = P.name || "";
  if (has(P.photo)) { $("photo").src = P.photo; $("photo").alt = P.name || ""; }
  else $("photo").closest("figure").querySelector("img").remove();
  $("location").textContent = P.location || "";
  $("bio").innerHTML = list(P.bio).map((p) => `<p>${p}</p>`).join("");

  const contact = $("contact");
  for (const [key, val] of Object.entries(P.links || {})) {
    if (!has(val)) continue;
    const href = key === "email" ? `mailto:${val}` : val;
    const li = el("li");
    const a = el("a", { href, ...extLink(href) }, `${ICONS[key] || ""}<span>${LINK_LABELS[key] || key}</span>`);
    li.appendChild(a); contact.appendChild(li);
  }

  /* clock */
  if (has(P.timezone)) {
    const fmt = new Intl.DateTimeFormat("en-AU", { timeZone: P.timezone, hour: "2-digit", minute: "2-digit", hour12: false });
    const tick = () => { $("clock").textContent = `${fmt.format(new Date())} ${P.timezoneLabel || ""}`.trim(); };
    tick(); setInterval(tick, 15000);
  }

  /* typing line */
  (function typing() {
    const prefix = P.typingPrefix || "";
    const phrases = list(P.typingPhrases);
    const out = $("typed");
    $("typing-sr").textContent = prefix + (phrases.join(" ") || "");
    const render = (pre, phrase) => { out.innerHTML = ""; out.append(pre); if (phrase) out.appendChild(el("span", { class: "phrase" })).textContent = phrase; };
    if (!phrases.length) { render(prefix, ""); return; }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { render(prefix, phrases[0]); return; }

    let i = 0, c = 0, pi = 0, deleting = false;
    const typePrefix = () => {
      render(prefix.slice(0, ++pi), "");
      pi < prefix.length ? setTimeout(typePrefix, 38) : setTimeout(step, 350);
    };
    const step = () => {
      const word = phrases[i];
      c += deleting ? -1 : 1;
      render(prefix, word.slice(0, c));
      if (!deleting && c === word.length) { deleting = true; return setTimeout(step, 2100); }
      if (deleting && c === 0) { deleting = false; i = (i + 1) % phrases.length; return setTimeout(step, 320); }
      setTimeout(step, deleting ? 28 : 62);
    };
    typePrefix();
  })();

  /* ---------------- helpers for sections ---------------- */
  const root = $("sections");
  const nav = $("nav");
  const addSection = (id, title, extraHead) => {
    const sec = el("section", { class: "section", id, "aria-labelledby": `${id}-h` });
    const head = el("div", { class: "section-head" });
    head.appendChild(el("h2", { id: `${id}-h` }, title));
    if (extraHead) head.appendChild(extraHead);
    sec.appendChild(head);
    root.appendChild(sec);
    const li = el("li"); li.appendChild(el("a", { href: `#${id}` }, title)); nav.appendChild(li);
    return sec;
  };

  const boldMe = (authors) => {
    if (!has(authors)) return "";
    const me = (P.name || "").trim();
    return authors.split(",").map((a) => {
      const t = a.trim();
      return t.replace(/[*†‡]/g, "") === me ? `<b>${t}</b>` : t;
    }).join(", ");
  };

  const thumb = (item) => {
    const box = el("div", { class: "thumb" });
    if (has(item.video)) {
      const v = el("video", { src: item.video, autoplay: true, muted: true, loop: true, playsinline: true, "aria-hidden": "true" });
      v.muted = true; box.appendChild(v);
    } else if (has(item.image)) {
      box.appendChild(el("img", { src: item.image, alt: "", loading: "lazy" }));
      if (has(item.imageHover)) box.appendChild(el("img", { src: item.imageHover, alt: "", loading: "lazy", class: "hover" }));
    } else {
      const label = item.short || item.title.split(/[:—]/)[0].trim();
      box.appendChild(el("div", { class: "thumb-empty", "aria-hidden": "true" }, `<span>${label}</span>`));
    }
    const target = has(item.url) ? item.url : (list(item.links).find((l) => has(l.url)) || {}).url;
    if (target) {
      const a = el("a", { href: target, tabindex: "-1", "aria-hidden": "true", ...extLink(target) });
      a.appendChild(box); return a;
    }
    return box;
  };

  const linksRow = (item, abstractEl) => {
    const row = el("div", { class: "links" });
    list(item.links).filter((l) => has(l.url)).forEach((l) => row.appendChild(el("a", { href: l.url, ...extLink(l.url) }, l.label)));
    if (abstractEl) {
      const b = el("button", { type: "button", "aria-expanded": "false" }, "Abstract");
      b.addEventListener("click", () => {
        const open = abstractEl.hidden;
        abstractEl.hidden = !open; b.setAttribute("aria-expanded", String(open));
      });
      row.appendChild(b);
    }
    return row.children.length ? row : null;
  };

  const entry = (item, kind) => {
    const art = el("article", { class: "entry" + (item.highlight ? " highlight" : "") });
    if (has(item.topic)) art.dataset.topic = item.topic;
    art.appendChild(thumb(item));
    const body = el("div", { class: "entry-body" });
    body.appendChild(has(item.url)
      ? el("a", { class: "entry-title", href: item.url, ...extLink(item.url) }, item.title)
      : el("div", { class: "entry-title" }, item.title));
    if (kind === "pub") {
      if (has(item.authors)) body.appendChild(el("div", { class: "authors" }, boldMe(item.authors)));
      if (has(item.venue) || has(item.status)) {
        body.appendChild(el("div", { class: "venue" },
          `${item.venue || ""}${has(item.status) ? `<span class="tag">${item.status}</span>` : ""}`));
      }
    } else if (has(item.context)) {
      body.appendChild(el("div", { class: "venue" }, item.context));
    }
    const text = kind === "pub" ? item.tldr : item.text;
    if (has(text)) body.appendChild(el("p", { class: "tldr" }, text));
    const abs = has(item.abstract) ? el("p", { class: "abstract", hidden: true }, item.abstract) : null;
    const lr = linksRow(item, abs);
    if (lr) body.appendChild(lr);
    if (abs) body.appendChild(abs);
    art.appendChild(body);
    return art;
  };

  const logoBox = (src, name) => {
    const box = el("div", { class: "logo", "aria-hidden": "true" });
    const initial = (name || "?").trim()[0];
    if (has(src)) {
      const img = el("img", { src, alt: "" });
      img.addEventListener("error", () => { box.textContent = initial; });
      box.appendChild(img);
    } else box.textContent = initial;
    return box;
  };

  /* ---------------- news ---------------- */
  if (list(S.news).length) {
    const sec = addSection("news", "News");
    const ul = el("ul", { class: "news" });
    const n = S.newsVisible || 5;
    S.news.forEach((item, idx) => {
      const li = el("li", { hidden: idx >= n });
      li.appendChild(el("time", {}, item.date));
      li.appendChild(el("span", {}, item.text));
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    if (S.news.length > n) {
      const b = el("button", { class: "more-btn", type: "button", "aria-expanded": "false" }, "Show older news");
      b.addEventListener("click", () => {
        const open = b.getAttribute("aria-expanded") !== "true";
        ul.querySelectorAll("li").forEach((li, idx) => { if (idx >= n) li.hidden = !open; });
        b.setAttribute("aria-expanded", String(open));
        b.textContent = open ? "Show less" : "Show older news";
      });
      sec.appendChild(b);
    }
  }

  /* ---------------- publications ---------------- */
  if (list(S.publications).length) {
    const topics = [...new Set(S.publications.map((p) => p.topic).filter(has))];
    let filters = null;
    if (topics.length > 1) {
      filters = el("div", { class: "filters", role: "group", "aria-label": "Filter by topic" });
      ["All", ...topics].forEach((t, i) => {
        const b = el("button", { type: "button", "aria-pressed": String(i === 0), "data-topic": t }, t);
        filters.appendChild(b);
      });
    }
    const sec = addSection("research", "Research", filters);
    const wrap = el("div", { class: "entries" });
    S.publications.forEach((p) => wrap.appendChild(entry(p, "pub")));
    sec.appendChild(wrap);
    if (filters) {
      filters.addEventListener("click", (e) => {
        const b = e.target.closest("button"); if (!b) return;
        filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        const t = b.dataset.topic;
        wrap.querySelectorAll(".entry").forEach((a) => { a.hidden = !(t === "All" || a.dataset.topic === t); });
      });
    }
  }

  /* ---------------- experience ---------------- */
  if (list(S.experience).length) {
    const sec = addSection("experience", "Experience");
    const ul = el("ul", { class: "rows" });
    S.experience.forEach((x) => {
      const li = el("li");
      li.appendChild(logoBox(x.logo, x.org));
      li.appendChild(el("div", {},
        `<div class="row-title">${x.role}</div><div class="row-sub">${x.org}${has(x.place) ? `, ${x.place}` : ""}</div>${has(x.text) ? `<p class="row-text">${x.text}</p>` : ""}`));
      li.appendChild(el("div", { class: "row-dates" }, x.dates || ""));
      ul.appendChild(li);
    });
    sec.appendChild(ul);
  }

  /* ---------------- projects ---------------- */
  if (list(S.projects).length) {
    const sec = addSection("projects", "Projects");
    const wrap = el("div", { class: "entries" });
    S.projects.forEach((p) => wrap.appendChild(entry(p, "proj")));
    sec.appendChild(wrap);
  }

  /* ---------------- education ---------------- */
  if (list(S.education).length) {
    const sec = addSection("education", "Education");
    const ul = el("ul", { class: "rows" });
    S.education.forEach((x) => {
      const li = el("li");
      li.appendChild(logoBox(x.logo, x.school));
      li.appendChild(el("div", {},
        `<div class="row-title">${x.degree}</div><div class="row-sub">${x.school}</div>${has(x.note) ? `<p class="row-text">${x.note}</p>` : ""}`));
      li.appendChild(el("div", { class: "row-dates" }, x.dates || ""));
      ul.appendChild(li);
    });
    sec.appendChild(ul);
  }

  /* ---------------- honours ---------------- */
  if (list(S.honours).length) {
    const sec = addSection("honours", "Honours");
    const ul = el("ul", { class: "honours" });
    S.honours.forEach((h) => ul.appendChild(el("li", {}, h)));
    sec.appendChild(ul);
  }

  $("footer").innerHTML = S.footer || "";

  /* ---------------- highlight current section in nav ---------------- */
  const links = [...nav.querySelectorAll("a")];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === `#${e.target.id}`)));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  root.querySelectorAll(".section").forEach((s) => io.observe(s));
})();
