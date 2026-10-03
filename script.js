/**
 * Beswin Posters — Store Configuration
 * Centralized business, product and content data for the storefront.
 *
 * Edit prices, contact details and copy here — the page reads everything
 * from this object, so nothing needs to be changed in index.html.
 *
 * SHOPIFY: When products go live on Shopify, paste each product / checkout
 * URL into the matching `checkoutUrl` field below. While a `checkoutUrl` is
 * empty, its order button opens WhatsApp with a pre-filled order message.
 */
const posterConfig = {
    business: {
        name: "Beswin Posters",
        tagline: "A4 Wall Poster Printing",
        whatsapp: "917538856797",          // Country code + number, no "+" or spaces (used for wa.me links)
        whatsappDisplay: "7538856797",
        instagram: "beswinjoee",           // Handle without "@"
        email: "beswinjoewrk@gmail.com",
        country: "India",
        currency: "INR",
        locale: "en-IN"
    },

    print: {
        size: "A4",
        width: "210 mm",
        height: "297 mm",
        dimensions: "210 × 297 mm"
    },

    products: {
        bw: {
            name: "B&W A4 Print",
            label: "Black & White",
            price: 30,
            unit: "per A4 print",
            description: "Clean, sharp black & white printing for quotes, notes, sketches and minimal designs.",
            features: [
                "{size} size · {dimensions}",
                "Black & white print",
                "Send your own ready design"
            ],
            visual: { poster: "room", bw: true, image: "images/posters/product-bw.jpg", alt: "Stay Focused — B&W poster" },
            cta: "Order Now",
            checkoutUrl: "" // ← Shopify product / checkout URL
        },
        colour: {
            name: "Premium Colour Glossy A4 Print",
            label: "Glossy Colour",
            price: 50,
            unit: "per A4 print",
            description: "Full-colour printing on glossy paper for rich, vivid wall posters.",
            features: [
                "{size} size · {dimensions}",
                "Full colour on glossy paper",
                "Send your own ready design"
            ],
            visual: { poster: "room", glossy: true, image: "images/posters/product-colour.jpg", alt: "Good Things Take Time — Colour poster" },
            cta: "Order Now",
            checkoutUrl: "" // ← Shopify product / checkout URL
        },
        custom: {
            name: "Custom Design + Premium Colour Print",
            label: "Design + Print",
            price: 80,
            unit: "per A4 poster",
            description: "Don't have a print-ready file? We design it from your idea, then print it in premium glossy colour.",
            includes: ["Design preparation", "Glossy colour print"],
            features: [
                "We prepare the design for you",
                "From your text, photos, logo or reference",
                "Printed in premium glossy colour"
            ],
            visual: { poster: "custom", image: "images/posters/product-custom.jpg", alt: "Your Design Here — Custom poster" },
            featured: true,
            cta: "Start Custom Order",
            checkoutUrl: "" // ← Shopify product / checkout URL
        }
    },

    // Used by general "Order on WhatsApp" buttons
    generalOrder: {
        checkoutUrl: "", // ← Optional: Shopify collection / store URL
        message: "Hi Beswin Posters, I'd like to order a poster."
    },

    // Poster use cases. Add `image: "path/to/photo.jpg"` to any item to
    // replace the illustrated sample with a real product photo.
    showcase: [
        { title: "Room posters", desc: "Art, quotes and scenes for your bedroom or living space.", poster: "room", glossy: true, image: "images/posters/good-things-take-time.jpg" },
        { title: "Gaming posters", desc: "Setups, characters and game-inspired designs.", poster: "gaming", glossy: true, image: "images/posters/anime-bw.jpg" },
        { title: "Study posters", desc: "Timetables, formulas and motivation for your desk wall.", poster: "study", image: "images/posters/discipline.jpg" },
        { title: "Business posters", desc: "Shop signs, menus, offers and announcements.", poster: "business", glossy: true, image: "images/posters/business.jpg" },
        { title: "Event posters", desc: "Parties, college fests, concerts and meetups.", poster: "event", glossy: true, image: "images/posters/event.jpg" },
        { title: "Custom designs", desc: "Photos, gifts and one-of-a-kind ideas made for you.", poster: "custom", image: "images/posters/custom.jpg" }
    ],

    highlights: [
        { title: "Premium glossy colour printing", desc: "Colour posters are printed on glossy paper for rich, vivid results." },
        { title: "Affordable A4 pricing", desc: "Simple per-print prices with no hidden extras." },
        { title: "Custom designs available", desc: "No file? Send your idea and we'll prepare the design for you." },
        { title: "Personal, local service", desc: "You talk directly to the person printing your poster." },
        { title: "Easy WhatsApp ordering", desc: "Send your file and confirm your order in a single chat." }
    ]
};

/**
 * FAQs are built from the config so prices and contact details stay in sync.
 */
function buildFaqs(config) {
    const { business, print, products } = config;
    const p = (key) => formatPrice(products[key].price);
    return [
        {
            q: "How do I place an order?",
            a: `Choose your print above and tap the order button — it opens WhatsApp with your order details ready to send. Then share your image, text or design in the same chat and we'll confirm everything with you. You can also message us directly at ${business.whatsappDisplay}.`
        },
        {
            q: "Can I send my own design?",
            a: `Yes. Send your image or ready design on WhatsApp and choose B&W (${p("bw")}) or Premium Colour Glossy (${p("colour")}). For the best result, send the highest-quality file you have.`
        },
        {
            q: "What paper do you use?",
            a: "Premium colour posters are printed on glossy paper for rich, vivid colour. B&W posters are printed on standard A4 paper. If you have a specific paper preference, mention it when you order."
        },
        {
            q: "Can you create the design for me?",
            a: `Yes. Choose ${products.custom.name} (${p("custom")}). Send us your text, photos, logo or a reference, and we'll prepare the design and print it in premium glossy colour.`
        },
        {
            q: "What size are the posters?",
            a: `All posters are ${print.size} size — ${print.dimensions}.`
        },
        {
            q: "How do I receive my poster?",
            a: "Once your order is confirmed, we'll arrange how you receive your poster with you directly on WhatsApp, based on your location."
        },
        {
            q: "Can I order multiple posters?",
            a: "Yes. Send all your designs together on WhatsApp and mention which print option you'd like for each one."
        }
    ];
}

/* ───────────────────────── Helpers ───────────────────────── */

function formatPrice(amount) {
    const { locale, currency } = posterConfig.business;
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(amount);
}

/** Replaces {size}, {dimensions}, etc. with values from posterConfig.print */
function fillTokens(text) {
    return String(text).replace(/\{(\w+)\}/g, (match, key) => posterConfig.print[key] ?? match);
}

function whatsappUrl(message) {
    const base = `https://wa.me/${posterConfig.business.whatsapp}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function instagramUrl() {
    return `https://www.instagram.com/${posterConfig.business.instagram}/`;
}

function emailUrl() {
    const subject = encodeURIComponent(`${posterConfig.business.name} — Poster enquiry`);
    return `mailto:${posterConfig.business.email}?subject=${subject}`;
}

function productMessage(key) {
    const product = posterConfig.products[key];
    const { name } = posterConfig.business;
    if (key === "custom") {
        return `Hi ${name}, I'd like to order a ${product.name} (${formatPrice(product.price)}). Here's my idea:`;
    }
    return `Hi ${name}, I'd like to order a ${product.name} (${formatPrice(product.price)}). I'll send my design here.`;
}

/** Shopify checkout URL if configured, otherwise a pre-filled WhatsApp message. */
function orderUrl(key) {
    if (key === "general") {
        return posterConfig.generalOrder.checkoutUrl || whatsappUrl(posterConfig.generalOrder.message);
    }
    const product = posterConfig.products[key];
    if (!product) return whatsappUrl(posterConfig.generalOrder.message);
    return product.checkoutUrl || whatsappUrl(productMessage(key));
}

function setExternal(el) {
    if (/^https?:/i.test(el.getAttribute("href") || "")) {
        el.target = "_blank";
        el.rel = "noopener noreferrer";
    }
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

/* ─────────────────── Illustrated poster samples ───────────────────
 * Pure HTML/CSS poster layouts in A4 proportions. They're decorative
 * samples (aria-hidden) and can be swapped for real photos via `image`.
 */
const posterDesigns = {
    room: () => `
        <div class="pz pz-room">
            <div class="pz-row pz-meta"><span>No. 07</span><span>Wall Series</span></div>
            <div class="pz-room-art"><span class="pz-sun"></span><span class="pz-hill pz-hill--1"></span><span class="pz-hill pz-hill--2"></span></div>
            <span class="pz-serif pz-room-title">Golden Hour</span>
        </div>`,
    study: () => `
        <div class="pz pz-study">
            <div class="pz-row pz-meta"><span>Study / 01</span><span>Daily</span></div>
            <span class="pz-study-title">Small steps, every day.</span>
            <ul class="pz-checks"><li><i class="on"></i>Read</li><li><i class="on"></i>Revise</li><li><i></i>Rest</li></ul>
        </div>`,
    event: () => `
        <div class="pz pz-event">
            <div class="pz-row pz-meta"><span>Live</span><span>Open Air</span></div>
            <span class="pz-event-num">08</span>
            <span class="pz-event-title">Music<br>Night</span>
            <div class="pz-row pz-meta"><span>Sat</span><span>8 PM</span><span>Venue</span></div>
        </div>`,
    gaming: () => `
        <div class="pz pz-gaming">
            <div class="pz-row pz-meta"><span>Player 01</span><span>LVL 99</span></div>
            <span class="pz-gaming-title">Game<br><em>On</em></span>
            <div class="pz-pixels"><i></i><i></i><i></i><i></i></div>
            <span class="pz-meta pz-blink">Press start</span>
        </div>`,
    business: () => `
        <div class="pz pz-business">
            <span class="pz-badge">Est.<br>2026</span>
            <div>
                <span class="pz-serif pz-business-brand">Your Brand</span>
                <span class="pz-business-title">Now<br>Open</span>
            </div>
            <span class="pz-meta">Shop · Studio · Café</span>
        </div>`,
    custom: () => `
        <div class="pz pz-custom">
            <span class="pz-crop pz-crop--tl"></span><span class="pz-crop pz-crop--tr"></span>
            <span class="pz-crop pz-crop--bl"></span><span class="pz-crop pz-crop--br"></span>
            <div class="pz-custom-frame">
                <span class="pz-photo"></span>
                <span class="pz-serif pz-custom-title">Your design here</span>
                <span class="pz-meta">Text · Photo · Logo</span>
            </div>
        </div>`
};

function posterMarkup({ poster, glossy = false, bw = false, image = "", alt = "" }) {
    const classes = ["poster", glossy && "poster--glossy", bw && "poster--bw"].filter(Boolean).join(" ");
    if (image) {
        return `<div class="${classes}"><img src="${escapeHtml(image)}" alt="${escapeHtml(alt)}" loading="lazy" class="poster-photo"></div>`;
    }
    const tpl = posterDesigns[poster] || posterDesigns.room;
    return `<div class="${classes}" aria-hidden="true">${tpl()}</div>`;
}

/* ───────────────────────── Page setup ───────────────────────── */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
    const { business, print, products } = posterConfig;

    // --- TEXT BINDINGS ---
    const bizValues = {
        ...business,
        instagramHandle: `@${business.instagram}`
    };
    document.querySelectorAll("[data-biz]").forEach((el) => {
        const value = bizValues[el.dataset.biz];
        if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll("[data-print]").forEach((el) => {
        const value = print[el.dataset.print];
        if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll("[data-price]").forEach((el) => {
        const product = products[el.dataset.price];
        if (product) el.textContent = formatPrice(product.price);
    });

    // --- HERO / SECTION POSTERS ---
    document.querySelectorAll("[data-poster]").forEach((el) => {
        el.insertAdjacentHTML("afterbegin", posterMarkup({
            poster: el.dataset.poster,
            glossy: el.hasAttribute("data-glossy")
        }));
    });

    // --- PRODUCT CARDS ---
    const productGrid = document.getElementById("productGrid");
    if (productGrid) {
        Object.entries(products).forEach(([key, product]) => {
            const card = document.createElement("article");
            card.className = `product-card reveal${product.featured ? " product-card--featured" : ""}`;
            card.id = `product-${key}`;

            const includes = product.includes
                ? `<div class="product-includes" aria-label="Includes">
                        ${product.includes.map((item) => `<span>${escapeHtml(item)}</span>`).join('<span class="plus" aria-hidden="true">+</span>')}
                   </div>`
                : "";

            card.innerHTML = `
                <div class="product-visual">
                    ${posterMarkup(product.visual)}
                </div>
                <div class="product-body">
                    <span class="product-label">${escapeHtml(product.label)}</span>
                    <h3 class="product-name">${escapeHtml(product.name)}</h3>
                    ${includes}
                    <div class="product-price-row">
                        <span class="product-price">${formatPrice(product.price)}</span>
                        <span class="product-unit">${escapeHtml(product.unit)}</span>
                    </div>
                    <p class="product-desc">${escapeHtml(product.description)}</p>
                    <ul class="product-features">
                        ${product.features.map((f) => `<li>${escapeHtml(fillTokens(f))}</li>`).join("")}
                    </ul>
                    <a href="#" class="btn ${product.featured ? "btn-light" : "btn-primary"} btn-block" data-order="${key}" id="order-${key}">
                        ${escapeHtml(product.cta)}
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </a>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // --- SHOWCASE ---
    const showcaseGrid = document.getElementById("showcaseGrid");
    if (showcaseGrid) {
        posterConfig.showcase.forEach((item, index) => {
            const figure = document.createElement("figure");
            figure.className = "showcase-item reveal";
            figure.innerHTML = `
                <div class="showcase-wall">
                    ${posterMarkup({ ...item, alt: item.title })}
                </div>
                <figcaption>
                    <span class="showcase-num">${String(index + 1).padStart(2, "0")}</span>
                    <span class="showcase-text">
                        <span class="showcase-title">${escapeHtml(item.title)}</span>
                        <span class="showcase-desc">${escapeHtml(item.desc)}</span>
                    </span>
                </figcaption>
            `;
            showcaseGrid.appendChild(figure);
        });
    }

    // --- WHY LIST ---
    const whyList = document.getElementById("whyList");
    if (whyList) {
        posterConfig.highlights.forEach((item, index) => {
            const li = document.createElement("li");
            li.className = "why-item reveal";
            li.innerHTML = `
                <span class="why-num">${String(index + 1).padStart(2, "0")}</span>
                <div>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.desc)}</p>
                </div>
            `;
            whyList.appendChild(li);
        });
    }

    // --- FAQs ---
    const faqAccordion = document.getElementById("faqAccordion");
    if (faqAccordion) {
        buildFaqs(posterConfig).forEach((faq, index) => {
            const item = document.createElement("div");
            item.className = "faq-item";
            const id = `faq-answer-${index}`;
            item.innerHTML = `
                <h3 class="faq-heading">
                    <button class="faq-question" id="faq-question-${index}" aria-expanded="false" aria-controls="${id}">
                        ${escapeHtml(faq.q)}
                        <span class="faq-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </span>
                    </button>
                </h3>
                <div class="faq-answer" id="${id}" role="region" aria-labelledby="faq-question-${index}">
                    <p>${escapeHtml(faq.a)}</p>
                </div>
            `;
            faqAccordion.appendChild(item);
        });
    }

    // --- LINKS (run after dynamic content is rendered) ---
    const linkBuilders = {
        whatsapp: () => whatsappUrl(posterConfig.generalOrder.message),
        instagram: instagramUrl,
        email: emailUrl
    };
    document.querySelectorAll("[data-link]").forEach((el) => {
        const build = linkBuilders[el.dataset.link];
        if (build) {
            el.href = build();
            setExternal(el);
        }
    });
    document.querySelectorAll("[data-order]").forEach((el) => {
        el.href = orderUrl(el.dataset.order);
        setExternal(el);
    });

    // Footer year
    const footerYear = document.getElementById("footerYear");
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    // Structured data (generated from config)
    injectStructuredData();

    // --- INTERACTIONS ---

    // FAQ Accordion
    document.querySelectorAll(".faq-question").forEach((btn) => {
        btn.addEventListener("click", () => toggleFaq(btn));
    });

    function toggleFaq(btn) {
        const item = btn.closest(".faq-item");
        const isExpanded = btn.getAttribute("aria-expanded") === "true";

        // Close all others
        document.querySelectorAll(".faq-item").forEach((i) => {
            i.classList.remove("active");
            i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        });

        // Toggle current
        if (!isExpanded) {
            item.classList.add("active");
            btn.setAttribute("aria-expanded", "true");
        }
    }

    // Mobile Navigation
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");

    if (mobileMenuBtn && mobileNav) {
        const hamburgerIcon = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>';
        const closeIcon = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 6L6 18M6 6l12 12"></path></svg>';

        const setMenu = (open) => {
            mobileNav.setAttribute("aria-expanded", String(open));
            mobileMenuBtn.setAttribute("aria-expanded", String(open));
            mobileMenuBtn.innerHTML = open ? closeIcon : hamburgerIcon;
        };

        mobileMenuBtn.addEventListener("click", () => {
            setMenu(mobileNav.getAttribute("aria-expanded") !== "true");
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => setMenu(false));
        });

        // Close on Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && mobileNav.getAttribute("aria-expanded") === "true") {
                setMenu(false);
                mobileMenuBtn.focus();
            }
        });
    }

    // Navbar border on scroll
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
    }

    // Scroll reveal
    const revealEls = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduceMotion) {
        revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
        revealEls.forEach((el) => {
            el.classList.add("reveal-init");
            observer.observe(el);
        });
    }
});

function injectStructuredData() {
    const { business, products } = posterConfig;
    const data = {
        "@context": "https://schema.org",
        "@type": "Store",
        name: business.name,
        description: "Premium A4 wall poster printing in colour, B&W and custom designs.",
        image: "beswin-logo.png",
        email: business.email,
        telephone: `+${business.whatsapp}`,
        address: { "@type": "PostalAddress", addressCountry: "IN" },
        sameAs: [instagramUrl()],
        currenciesAccepted: business.currency,
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "A4 Poster Prints",
            itemListElement: Object.values(products).map((p) => ({
                "@type": "Offer",
                price: p.price,
                priceCurrency: business.currency,
                itemOffered: { "@type": "Product", name: p.name, description: p.description }
            }))
        }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
}
