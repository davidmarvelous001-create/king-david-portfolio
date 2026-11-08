/* ==========================================================================
   David Olufemi portfolio interactions
   ========================================================================== */
(function () {
  "use strict";

  const body = document.body;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Project data ---------- */
  const PROJECTS = {
    cadenza: {
      title: "Cadenza by Velox",
      cat: "Advertising / Real estate",
      year: "2025",
      img: "assets/img/work-cadenza-billboard.jpg",
      alt: "Cadenza by Velox billboard reading Your Family Deserves a Plot",
      desc: "A high-impact sales campaign for ₦20M plots off Obiri-Ikwere. Family-first headline, glossy price treatment and the C of O assurance up front. Property enquiries rose 8% in the three weeks after launch.",
    },
    delight: {
      title: "Delight Hibiscus Drink",
      cat: "Branding / Packaging",
      year: "2025",
      img: "assets/img/work-delight-bottle.jpg",
      alt: "Delight hibiscus drink bottle with fruit and spices",
      desc: "A label that lets the product name do the talking. Red, green and white palette, hand-drawn lettering and ingredient imagery that signals 'real' before you read a word. Brief to print-ready in 24 hours.",
    },
    fwog: {
      title: "fwog on sol",
      cat: "Web3 / UI",
      year: "2024",
      img: "assets/img/work-fwog.jpg",
      alt: "fwog on sol Web3 website design",
      desc: "A playful, illustration-led landing page for a Solana meme coin. Chunky type, cartoon characters and a tokenomics section that stays readable without killing the joke.",
    },
    "velox-vest": {
      title: "Velox Vest Co-Ownership",
      cat: "Digital / Social campaign",
      year: "2025",
      img: "assets/img/work-carousel.jpg",
      alt: "Velox Vest co-ownership social carousel",
      desc: "A social carousel system that explains fractional property ownership in plain language. Modular layouts, 3D props and a purple identity that stays consistent across 20+ posts.",
    },
    bora: {
      title: "BORA by Eneka",
      cat: "Advertising",
      year: "2025",
      img: "assets/img/work-bora.jpg",
      alt: "BORA by Eneka new price alert flyer",
      desc: "A price-led launch flyer for a serviced plot offer. Big number, clear title and a human photo to keep it warm rather than corporate.",
    },
    gardenia: {
      title: "Gardenia Pre-Launch",
      cat: "Advertising",
      year: "2025",
      img: "assets/img/work-gardenia.jpg",
      alt: "Gardenia pre-launch offer flyer",
      desc: "A green, balloon-led pre-launch campaign built to make a land offer feel light and celebratory instead of heavy and technical.",
    },
    luxe: {
      title: "LUXE Apartments",
      cat: "Advertising",
      year: "2025",
      img: "assets/img/work-luxe.jpg",
      alt: "LUXE Apartments property flyer",
      desc: "A premium apartment listing that leads with lifestyle before specs. Clean white space, an architectural hero image and a clear price ladder.",
    },
    "velox-billboard": {
      title: "Velox City Billboard",
      cat: "Advertising / Real estate",
      year: "2025",
      img: "assets/img/work-velox-billboard.jpg",
      alt: "Velox city billboard reading You Can Own A Part Of The City",
      desc: "A city-scale billboard that sells the idea of city ownership before the specs. One confident line, a clear location cue and a high-contrast layout that still works at speed and distance.",
    },
    choco: {
      title: "Lovely Love Treats Chocolate Cake",
      cat: "Branding / Campaign",
      year: "2025",
      img: "assets/img/work-choco.jpg",
      alt: "Lovely Love Treats chocolate cake campaign",
      desc: "An appetite-first campaign for Lovely Love Treats. Warm gold palette, oversized script and a chocolate pour that sells the first bite before you read the price.",
    },
    kaeru: {
      title: "KAERU",
      cat: "Web3 / UI",
      year: "2024",
      img: "assets/img/work-kaeru.jpg",
      alt: "KAERU Web3 website design",
      desc: "A dark, cinematic Web3 site for a frog-themed token. Layered illustration, punchy section titles and a tokenomics flow that rewards scrolling.",
    },
    landpay: {
      title: "Landpay",
      cat: "Digital / Social",
      year: "2025",
      img: "assets/img/work-landpay.jpg",
      alt: "Landpay Japa Plans social media design",
      desc: "A social campaign for a land-buying platform. Bold purple system, direct copy and a 3D location pin that became the campaign's visual signature.",
    },
    boys: {
      title: "The Boys",
      cat: "Web3 / UI",
      year: "2024",
      img: "assets/img/work-boys.jpg",
      alt: "The Boys Web3 website design",
      desc: "A comic-book inspired token site with section-by-section storytelling and a playful, character-driven art direction.",
    },
    wally: {
      title: "Wally the Alligator",
      cat: "Web3 / UI",
      year: "2024",
      img: "assets/img/work-wally.jpg",
      alt: "Wally the Alligator Web3 website design",
      desc: "A bright, swamp-green Web3 landing page. Step-by-step buying guide, character art and a community section that keeps the tone light.",
    },
    munchy: {
      title: "Munchy",
      cat: "Web3 / UI",
      year: "2024",
      img: "assets/img/work-munchy.jpg",
      alt: "Munchy Web3 website design",
      desc: "A candy-coloured token site with a soft pink palette and a clean, scannable tokenomics layout.",
    },
    edu: {
      title: "Velox Vest Education",
      cat: "Digital / Social",
      year: "2025",
      img: "assets/img/work-edu.jpg",
      alt: "Velox Vest educational carousel design",
      desc: "An education-first carousel series that answers the objections that stop people buying: security, paperwork and what happens after 12 months.",
    },
    august: {
      title: "August Flash Sales",
      cat: "Advertising",
      year: "2025",
      img: "assets/img/work-august.jpg",
      alt: "August flash sales property promotion",
      desc: "A loud, promo-led flyer stack for a flash sale. Gold 3D type, a ticking price ladder and enough energy to survive a crowded feed.",
    },
    marquis: {
      title: "Marquis Allocation",
      cat: "Advertising",
      year: "2025",
      img: "assets/img/work-marquis.jpg",
      alt: "Marquis estate launch and allocation flyer",
      desc: "An estate launch and allocation announcement built around a single hero image, a gold key and a date people need to remember.",
    },
    sizzles: {
      title: "Lovely Love Treats Chinchin",
      cat: "Branding / Packaging",
      year: "2025",
      img: "assets/img/work-sizzles.jpg",
      alt: "Lovely Love Treats crunchy chinchin campaign",
      desc: "A playful violet promo for Lovely Love Treats crunchy chinchin. Hand-lettered type, a product-forward composition and a price badge built to pop in a crowded feed.",
    },
    "llt-meatpie": {
      title: "Lovely Love Treats Meatpie",
      cat: "Branding / Campaign",
      year: "2025",
      img: "assets/img/work-llt-meatpie.jpg",
      alt: "Lovely Love Treats meatpie campaign",
      desc: "A warm, direct campaign for a savoury favourite. Big appetite-led type, a clean price line and product photography that makes the crust the hero.",
    },
    "velox-merch": {
      title: "Velox Vest Merch",
      cat: "Branding / Apparel",
      year: "2025",
      img: "assets/img/work-velox-merch.jpg",
      alt: "Velox Vest branded t-shirt mockup",
      desc: "A small merchandise system that carries the Velox Vest offer onto apparel. Minimal marks, a restrained palette and a 35% return message that still reads from across a room.",
    },
    "delight-lifestyle": {
      title: "Delight Lifestyle",
      cat: "Branding / Campaign",
      year: "2025",
      img: "assets/img/work-delight-lifestyle.jpg",
      alt: "Delight hibiscus drink lifestyle campaign",
      desc: "A lifestyle-led brand campaign that puts the bottle in real hands. Warm social photography, a relaxed tone and a label that stays legible in the moment.",
    },
    "delight-range": {
      title: "Delight Bottle Range",
      cat: "Branding / Packaging",
      year: "2025",
      img: "assets/img/work-delight-range.jpg",
      alt: "Delight hibiscus drink bottle range",
      desc: "A range shot that proves the label system holds across a full product line, from single bottle to shelf set.",
    },
    flyer: {
      title: "Velox Vest Product Flyer",
      cat: "Digital / Social",
      year: "2025",
      img: "assets/img/work-flyer.jpg",
      alt: "Velox Vest product flyer with location pin",
      desc: "A numbered product flyer series covering four estates, tied together with a glowing location pin and a consistent footer.",
    },
  };

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Cursor label targets ---------- */
  $$(".work-card, .project").forEach((el) => { if (!el.dataset.cursor) el.dataset.cursor = "View"; });
  $$(".cta__mail, a.contact-detail[href^='mailto']").forEach((el) => { el.dataset.cursor = "Email"; });
  $$("a.contact-detail[href^='tel']").forEach((el) => { el.dataset.cursor = "Call"; });
  $$(".social").forEach((el) => { el.dataset.cursor = "Social"; });
  $$(".filter").forEach((el) => { if (!el.dataset.cursor) el.dataset.cursor = "Filter"; });

  /* ---------- Scroll progress ---------- */
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.setAttribute("aria-hidden", "true");
  progressBar.innerHTML = "<i></i>";
  body.appendChild(progressBar);
  const progressFill = $("i", progressBar);

  /* ---------- Year ---------- */
  $$("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Hero ghost word bands ---------- */
  $$(".hero-word").forEach((row) => {
    const word = row.dataset.word;
    const track = $(".ghost-track", row);
    if (!word || !track) return;
    track.innerHTML = Array.from({ length: 8 }, () => `<span>${word}</span>`).join("");
  });

  /* ---------- Preloader ---------- */
  const preloader = $("[data-preloader]");
  if (preloader) {
    let seen = false;
    try { seen = sessionStorage.getItem("kingdavid-loaded") === "1"; } catch (e) {}
    if (seen || reduced) {
      preloader.remove();
      body.classList.remove("is-locked");
      body.classList.add("is-loaded");
    } else {
      body.classList.add("is-locked");
      const bar = $("[data-preload-bar]", preloader);
      const count = $("[data-preload-count]", preloader);
      let pct = 0;
      const tick = () => {
        pct = Math.min(100, pct + Math.random() * 16 + 5);
        if (bar) bar.style.width = pct + "%";
        if (count) count.textContent = String(Math.floor(pct)).padStart(2, "0");
        if (pct < 100) {
          setTimeout(tick, 90);
        } else {
          setTimeout(() => {
            preloader.classList.add("is-done");
            body.classList.remove("is-locked");
            body.classList.add("is-loaded");
            try { sessionStorage.setItem("kingdavid-loaded", "1"); } catch (e) {}
            setTimeout(() => preloader.remove(), 900);
          }, 220);
        }
      };
      tick();
    }
  } else {
    body.classList.add("is-loaded");
  }

  /* ---------- Header state ---------- */
  const header = $("[data-header]");
  if (header) {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("is-stuck", y > 24);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      header.style.setProperty("--scroll", max > 0 ? Math.min(y / max, 1).toFixed(4) : "0");

      if (!body.classList.contains("is-locked")) {
        if (y > 420 && y > lastY + 6) header.classList.add("is-hidden");
        else if (y < lastY - 6 || y < 120) header.classList.remove("is-hidden");
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    /* Sliding nav highlight */
    const nav = $(".nav-desktop", header);
    const pill = nav ? $(".nav-desktop__pill", nav) : null;
    if (nav && pill) {
      const navLinks = $$("a", nav);
      const current = $('a[aria-current="page"]', nav) || navLinks[0];
      const movePill = (el) => {
        if (!el) {
          pill.style.opacity = "0";
          return;
        }
        const nr = nav.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        pill.style.width = `${r.width + 16}px`;
        pill.style.transform = `translate(${r.left - nr.left - 8}px, -50%)`;
        pill.style.opacity = "1";
      };
      navLinks.forEach((a) => {
        a.addEventListener("mouseenter", () => movePill(a));
        a.addEventListener("focus", () => movePill(a));
      });
      nav.addEventListener("mouseleave", () => movePill(current));
      window.addEventListener("resize", () => movePill(current));
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => movePill(current));
      }
      setTimeout(() => movePill(current), 60);
    }
  }

  /* ---------- Menu ---------- */
  const menu = $("[data-menu]");
  const menuToggle = $("[data-menu-toggle]");
  const menuLabel = menuToggle ? $("span", menuToggle) : null;

  function setMenu(open) {
    if (!menu || !menuToggle) return;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (menuLabel) menuLabel.textContent = open ? "Close" : "Menu";
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    body.classList.toggle("is-locked", open);
    header.classList.remove("is-hidden");
    header.classList.toggle("is-stuck", open || window.scrollY > 24);
    if (open) {
      const first = $("a", menu);
      if (first) setTimeout(() => first.focus({ preventScroll: true }), 350);
    }
  }

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      setMenu(!menu.classList.contains("is-open"));
    });
    $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  /* ---------- Custom cursor ---------- */
  if (isFinePointer && !reduced) {
    const cursor = $("[data-cursor]");
    if (cursor) {
      const cursorLabel = document.createElement("span");
      cursorLabel.className = "cursor__label";
      cursor.appendChild(cursorLabel);

      let tx = -100, ty = -100, x = -100, y = -100, raf = null;
      const move = (e) => {
        tx = e.clientX;
        ty = e.clientY;
        cursor.classList.add("is-visible");
        if (!raf) raf = requestAnimationFrame(loop);
      };
      const loop = () => {
        x += (tx - x) * 0.18;
        y += (ty - y) * 0.18;
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        if (Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2) {
          raf = requestAnimationFrame(loop);
        } else {
          raf = null;
        }
      };
      window.addEventListener("mousemove", move, { passive: true });

      let labelTarget = null;
      document.addEventListener("mouseover", (e) => {
        const target = e.target.closest("[data-cursor]");
        if (target && target !== labelTarget) {
          labelTarget = target;
          cursorLabel.textContent = target.dataset.cursor;
          cursor.classList.add("is-label", "is-hover");
        } else if (!target) {
          labelTarget = null;
          cursorLabel.textContent = "";
          cursor.classList.remove("is-label");
        }
        if (e.target.closest("a, button, [data-work], summary, input, textarea, select")) {
          cursor.classList.add("is-hover");
        }
      });
      document.addEventListener("mouseout", (e) => {
        const target = e.target.closest("[data-cursor]");
        if (target && (!e.relatedTarget || !target.contains(e.relatedTarget))) {
          labelTarget = null;
          cursorLabel.textContent = "";
          cursor.classList.remove("is-label");
        }
        if (
          e.target.closest("a, button, [data-work], summary, input, textarea, select") &&
          (!e.relatedTarget || !e.target.closest("a, button, [data-work], summary, input, textarea, select").contains(e.relatedTarget))
        ) {
          cursor.classList.remove("is-hover");
        }
      });
      document.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"));
    }
  }

  /* ---------- Reveals ---------- */
  const revealEls = $$(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window && !reduced) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("is-in"));
    }
  }

  /* ---------- Split text reveals ---------- */
  const splitTargets = $$(
    ".section-head h2, .statement__head, .cta__title, .teaser__copy h2, " +
    ".phero__title, .about-hero__title, .contact-hero__title, .intro__lead"
  );

  function splitElement(el) {
    if (!el || el.dataset.split === "true") return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.trim()) textNodes.push(walker.currentNode);
    }
    textNodes.forEach((node) => {
      const frag = document.createDocumentFragment();
      node.nodeValue.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(" "));
          return;
        }
        const outer = document.createElement("span");
        outer.className = "split-word";
        const inner = document.createElement("span");
        inner.className = "split-word__in";
        inner.textContent = part;
        outer.appendChild(inner);
        frag.appendChild(outer);
      });
      node.parentNode.replaceChild(frag, node);
    });
    el.querySelectorAll(".split-word").forEach((word, i) => {
      word.style.setProperty("--i", String(Math.min(i, 16)));
    });
    el.dataset.split = "true";
  }

  splitTargets.forEach(splitElement);

  const splitEls = $$("[data-split]");
  if (splitEls.length) {
    if ("IntersectionObserver" in window && !reduced) {
      const sio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-split-in");
              sio.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -4% 0px", threshold: 0.12 }
      );
      splitEls.forEach((el) => sio.observe(el));
    } else {
      splitEls.forEach((el) => el.classList.add("is-split-in"));
    }
  }

  /* ---------- Media clip reveals ---------- */
  const mediaEls = $$(".work-card__frame, .project__frame, .phero__feature, .teaser__media, .about-bio__pic");
  if (mediaEls.length) {
    const mediaPairs = mediaEls.map((el, i) => {
      el.classList.add("media-reveal");
      el.style.transitionDelay = (i % 3) * 70 + "ms";
      return { el, trigger: el.parentElement || el };
    });
    if ("IntersectionObserver" in window && !reduced) {
      const mio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              mediaPairs.forEach((pair) => {
                if (pair.trigger === entry.target) pair.el.classList.add("is-in");
              });
              mio.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.1 }
      );
      const seenTriggers = new Set();
      mediaPairs.forEach((pair) => {
        if (!seenTriggers.has(pair.trigger)) {
          seenTriggers.add(pair.trigger);
          mio.observe(pair.trigger);
        }
      });
    } else {
      mediaEls.forEach((el) => el.classList.add("is-in"));
    }
  }

  /* ---------- Scroll progress + image parallax ---------- */
  const parallaxEls = $$(".phero__feature img, .teaser__media img");
  let scrollQueued = false;
  const onFrame = () => {
    scrollQueued = false;
    const y = window.scrollY || window.pageYOffset;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progressFill) progressFill.style.setProperty("--progress", max > 0 ? Math.min(1, y / max) : 0);

    if (!reduced && parallaxEls.length) {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > vh + 120) return;
        const offset = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.setProperty("--py", (-offset * 26).toFixed(1) + "px");
      });
    }
  };
  const requestScrollFrame = () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(onFrame);
    }
  };
  window.addEventListener("scroll", requestScrollFrame, { passive: true });
  window.addEventListener("resize", requestScrollFrame);
  onFrame();

  /* ---------- Magnetic elements ---------- */
  if (isFinePointer && !reduced) {
    $$(".cta__mail, .link-arrow, .footer__top-link, .social, .header-cta").forEach((el) => {
      el.classList.add("magnetic");
      let tx = 0, ty = 0, x = 0, y = 0, raf = null;
      const loop = () => {
        x += (tx - x) * 0.2;
        y += (ty - y) * 0.2;
        if (Math.abs(tx) < 0.05 && Math.abs(ty) < 0.05 && Math.abs(x) < 0.05 && Math.abs(y) < 0.05) {
          el.style.transform = "";
          raf = null;
          return;
        }
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
        raf = requestAnimationFrame(loop);
      };
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        tx = (e.clientX - (r.left + r.width / 2)) * 0.16;
        ty = (e.clientY - (r.top + r.height / 2)) * 0.16;
        if (!raf) raf = requestAnimationFrame(loop);
      });
      el.addEventListener("mouseleave", () => {
        tx = 0;
        ty = 0;
        if (!raf) raf = requestAnimationFrame(loop);
      });
    });
  }

  /* ---------- Hero mouse drift ---------- */
  const heroWords = $(".hero__words");
  const hero = $(".hero");
  if (hero && heroWords && isFinePointer && !reduced) {
    let tx = 0, ty = 0, x = 0, y = 0, raf = null;
    const loop = () => {
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      heroWords.style.setProperty("--mx", x.toFixed(3));
      heroWords.style.setProperty("--my", y.toFixed(3));
      if (Math.abs(tx - x) > 0.001 || Math.abs(ty - y) > 0.001) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    };
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    hero.addEventListener("mouseleave", () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(loop);
    });
  }

  /* ---------- Intro hero mouse drift ---------- */
  const introHero = $(".intro-hero");
  if (introHero && isFinePointer && !reduced) {
    let tx = 0, ty = 0, x = 0, y = 0, raf = null;
    const loop = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      introHero.style.setProperty("--mx", x.toFixed(3));
      introHero.style.setProperty("--my", y.toFixed(3));
      if (Math.abs(tx - x) > 0.001 || Math.abs(ty - y) > 0.001) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    };
    introHero.addEventListener("mousemove", (e) => {
      const r = introHero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    introHero.addEventListener("mouseleave", () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(loop);
    });
  }

  /* ---------- Client band drag ---------- */
  const trust = $("[data-trust]");
  const trustViewport = $("[data-trust-viewport]", trust);
  const trustShift = $("[data-trust-shift]", trust);
  if (trustViewport && trustShift) {
    let startX = 0, dragging = false, pointerId = null;
    const clampDrag = (v) => Math.max(-280, Math.min(280, v));

    trustViewport.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      startX = e.clientX;
      pointerId = e.pointerId;
      trustViewport.classList.add("is-dragging");
      trustShift.style.transition = "none";
      trustShift.style.transform = "translate3d(0, 0, 0)";
      if (trustViewport.setPointerCapture) trustViewport.setPointerCapture(e.pointerId);
    });

    trustViewport.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = clampDrag(e.clientX - startX);
      trustShift.style.transform = `translate3d(${dx}px, 0, 0)`;
    });

    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      trustViewport.classList.remove("is-dragging");
      trustShift.style.transition = "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)";
      trustShift.style.transform = "translate3d(0, 0, 0)";
      if (pointerId != null && trustViewport.releasePointerCapture) {
        try { trustViewport.releasePointerCapture(pointerId); } catch (err) {}
      }
      pointerId = null;
    };

    trustViewport.addEventListener("pointerup", endDrag);
    trustViewport.addEventListener("pointercancel", endDrag);
    trustViewport.addEventListener("lostpointercapture", endDrag);
  }

  /* ---------- Card image drift ---------- */
  if (isFinePointer && !reduced) {
    $$(".project, .work-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--dx", ((e.clientX - (r.left + r.width / 2)) / r.width).toFixed(3));
        card.style.setProperty("--dy", ((e.clientY - (r.top + r.height / 2)) / r.height).toFixed(3));
      });
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--dx", "0");
        card.style.setProperty("--dy", "0");
      });
    });
  }

  /* ---------- Counters ---------- */
  const counters = $$("[data-count]");
  function runCounter(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.querySelector("em") ? el.querySelector("em").outerHTML : "";
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = (target * eased).toFixed(decimals);
      el.innerHTML = val + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if ("IntersectionObserver" in window && !reduced) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              cio.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((el) => cio.observe(el));
    } else {
      counters.forEach((el) => {
        const suffix = el.querySelector("em") ? el.querySelector("em").outerHTML : "";
        el.innerHTML = el.dataset.count + suffix;
      });
    }
  }

  /* ---------- Skills rotator ---------- */
  const rotator = $("[data-rotator]");
  if (rotator) {
    const words = (rotator.dataset.rotator || "").split("|").filter(Boolean);
    let i = 0;
    if (words.length && !reduced) {
      setInterval(() => {
        i = (i + 1) % words.length;
        const span = document.createElement("span");
        span.className = "rotator-word";
        span.textContent = words[i];
        rotator.innerHTML = "";
        rotator.appendChild(span);
      }, 2200);
    }
  }

  /* ---------- Skills accordion ---------- */
  const accordion = $("[data-accordion]");
  if (accordion) {
    const triggers = $$(".acc__trigger", accordion);
    const setItem = (item, open) => {
      item.classList.toggle("is-open", open);
      const trigger = $(".acc__trigger", item);
      const panel = $(".acc__panel", item);
      if (trigger) trigger.setAttribute("aria-expanded", open ? "true" : "false");
      if (panel) panel.setAttribute("aria-hidden", open ? "false" : "true");
    };
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const item = trigger.closest(".acc");
        const isOpen = item.classList.contains("is-open");
        $$(".acc", accordion).forEach((other) => setItem(other, false));
        if (!isOpen) setItem(item, true);
      });
    });
  }

  /* ---------- Project filters ---------- */
  const filterBar = $("[data-filters]");
  if (filterBar) {
    const filters = $$(".filter", filterBar);
    const cards = $$(".project");
    const empty = $("[data-empty]");
    const seeMoreWrap = $("[data-see-more-wrap]");
    const seeMore = $("[data-see-more]", seeMoreWrap);
    const seeMoreCount = $("[data-see-more-count]", seeMoreWrap);
    const PAGE = 6;
    let active = "all";
    let visible = PAGE;

    const params = new URLSearchParams(window.location.search);
    const requested = (params.get("filter") || "all").toLowerCase();
    if (filters.some((f) => f.dataset.filter === requested)) active = requested;

    const matches = (card) =>
      active === "all" || (card.dataset.cat || "").split(" ").includes(active);

    const render = (animate) => {
      const matched = cards.filter(matches);
      const shown = new Set(matched.slice(0, visible));

      filters.forEach((f) => {
        const on = f.dataset.filter === active;
        f.classList.toggle("is-active", on);
        f.setAttribute("aria-pressed", on ? "true" : "false");
      });

      cards.forEach((card) => {
        const show = shown.has(card);
        const wasHidden = card.classList.contains("is-hidden");
        card.classList.toggle("is-hidden", !show);
        if (show && animate && wasHidden) {
          card.classList.remove("is-in");
          // restart the entrance
          void card.offsetWidth;
          requestAnimationFrame(() => card.classList.add("is-in"));
        } else if (show) {
          card.classList.add("is-in");
        }
      });

      if (seeMoreWrap) {
        const left = Math.max(0, matched.length - shown.size);
        seeMoreWrap.hidden = left === 0;
        if (seeMoreCount) {
          seeMoreCount.textContent = left + (left === 1 ? " project left" : " projects left");
        }
      }

      if (empty) empty.classList.toggle("is-visible", matched.length === 0);
    };

    filters.forEach((f) => {
      f.addEventListener("click", () => {
        active = f.dataset.filter;
        visible = PAGE;
        render(true);
        const url = new URL(window.location.href);
        if (active === "all") url.searchParams.delete("filter");
        else url.searchParams.set("filter", active);
        window.history.replaceState({}, "", url);
      });
    });

    if (seeMore) {
      seeMore.addEventListener("click", () => {
        visible += PAGE;
        render(true);
      });
    }

    render(true);
  }

  /* ---------- Lightbox ---------- */
  const lb = $("[data-lightbox]");
  if (lb) {
    const imgEl = $("[data-lb-img]", lb);
    const catEl = $("[data-lb-cat]", lb);
    const titleEl = $("[data-lb-title]", lb);
    const descEl = $("[data-lb-desc]", lb);
    const countEl = $("[data-lb-count]", lb);
    let items = [];
    let index = 0;
    let lastFocus = null;

    const collect = () => {
      items = $$("[data-work]").filter((el) => !el.classList.contains("is-hidden"));
    };

    const render = () => {
      const el = items[index];
      if (!el) return;
      const key = el.dataset.work;
      const p = PROJECTS[key];
      if (!p) return;
      imgEl.src = p.img;
      imgEl.alt = p.alt;
      catEl.textContent = p.cat;
      titleEl.textContent = p.title;
      descEl.textContent = p.desc;
      countEl.textContent = String(index + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0");
    };

    const open = (el) => {
      collect();
      index = Math.max(0, items.indexOf(el));
      lastFocus = document.activeElement;
      render();
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      body.classList.add("is-locked");
      const closeBtn = $("[data-lb-close]", lb);
      if (closeBtn) setTimeout(() => closeBtn.focus({ preventScroll: true }), 60);
    };

    const close = () => {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      body.classList.remove("is-locked");
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    };

    const step = (dir) => {
      if (!items.length) return;
      index = (index + dir + items.length) % items.length;
      render();
    };

    $$("[data-work]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        open(el);
      });
    });

    const closeBtn = $("[data-lb-close]", lb);
    const prevBtn = $("[data-lb-prev]", lb);
    const nextBtn = $("[data-lb-next]", lb);
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (prevBtn) prevBtn.addEventListener("click", () => step(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => step(1));

    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target.classList.contains("lightbox__stage") || e.target.classList.contains("lightbox__imgwrap")) {
        close();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "Tab") {
        // simple focus trap
        const focusables = $$("button, a[href], input, textarea, select", lb);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ---------- Global keyboard: menu ---------- */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu && menu.classList.contains("is-open")) setMenu(false);
  });

  /* ---------- Contact form (mailto) ---------- */
  const form = $("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const type = String(data.get("type") || "A project").trim();
      const message = String(data.get("message") || "").trim();
      const subject = encodeURIComponent(`${type}, enquiry from ${name}`);
      const bodyText = encodeURIComponent(
        `Hi King David,\n\n${message}\n\n${name}\n${email}`
      );
      const status = $("[data-form-status]", form);
      if (status) status.textContent = "Opening your email app…";
      window.location.href = `mailto:david4ayomipo@gmail.com?subject=${subject}&body=${bodyText}`;
      setTimeout(() => {
        if (status) status.textContent = "No email app? Write to david4ayomipo@gmail.com directly.";
      }, 1800);
    });
  }

  /* ---------- Page transitions ---------- */
  const veil = $(".page-veil");
  if (veil && !reduced) {
    let leaving = false;
    document.addEventListener("click", (e) => {
      if (leaving || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest("a[href]");
      if (!link || link.target || link.hasAttribute("download") || link.dataset.placeholder !== undefined) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(href) || /^https?:/i.test(href)) return;
      e.preventDefault();
      leaving = true;
      body.classList.add("is-leaving");
      setTimeout(() => { window.location.href = href; }, 460);
    });
    window.addEventListener("pageshow", () => {
      leaving = false;
      body.classList.remove("is-leaving");
    });
  }

})();
