/**
 * BESWIN Shop Configuration
 * Centralized data for the single-product storefront.
 * 
 * Update the URLs and product details below before deploying.
 */
const shopConfig = {
    brand: "BESWIN",
    product: {
        name: "BESWIN Pack",
        price: "$10",
        description: "A collection of Discord and community resources designed to help you get started faster.",
        whopUrl: "YOUR_WHOP_PRODUCT_URL",
        badge: "ONE-TIME PURCHASE",
        categories: [
            {
                title: "Discord Templates",
                desc: "Ready-to-use server structures for different community types. Set up channels, roles and permissions without starting from zero."
            },
            {
                title: "Moderation & Management",
                desc: "Rules, staff systems, moderation workflows and checklists to help you run a community with less guesswork."
            },
            {
                title: "Bot & Server Configurations",
                desc: "Resources and references that make bot setup and server configuration faster and easier."
            },
            {
                title: "Bonus Resources",
                desc: "Additional tools, templates and materials included with the pack."
            }
        ],
        included: [
            "Server templates",
            "Moderation resources",
            "Bot configurations",
            "Community checklists",
            "Channel architecture",
            "Bonus materials"
        ],
        discordFeatures: [
            "Server organization templates",
            "Channel architecture maps",
            "Moderation workflows",
            "Role & permission structures",
            "Bot configuration resources",
            "Community setup checklists"
        ]
    },
    faqs: [
        {
            q: "What's included in the pack?",
            a: "The BESWIN Pack includes Discord server templates, moderation resources, bot configuration references, community checklists, channel architecture maps and bonus materials."
        },
        {
            q: "How much does it cost?",
            a: "The pack is a one-time purchase for $10. No subscription, no recurring fees."
        },
        {
            q: "Is it a subscription?",
            a: "No. It's a single one-time payment. You pay once and get access to everything that's included."
        },
        {
            q: "How do I receive the pack?",
            a: "After purchasing through Whop, you'll receive access to the BESWIN Pack through your Whop account."
        },
        {
            q: "Can I use the resources for my own Discord?",
            a: "Yes. The templates, configurations and resources are designed for you to use in your own Discord communities."
        },
        {
            q: "Do I need coding experience?",
            a: "No. The resources are designed to be practical and usable without any technical or coding background."
        },
        {
            q: "Are future updates included?",
            a: "Yes. Any future additions or updates to the pack will be included with your purchase."
        }
    ],
    links: {
        website: "https://yourwebsite.com",
        github: "https://github.com/beswinjoe",
        discord: "https://discord.gg/yourinvite"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // --- POPULATE CONFIG DATA ---

    // Update all Whop CTA links
    document.querySelectorAll('.whop-cta').forEach(el => {
        if (el.href !== undefined) el.href = shopConfig.product.whopUrl;
    });

    // Update social/external links
    document.querySelectorAll('[data-url-website]').forEach(el => el.href = shopConfig.links.website);
    document.querySelectorAll('[data-url-github]').forEach(el => el.href = shopConfig.links.github);
    document.querySelectorAll('[data-url-discord]').forEach(el => el.href = shopConfig.links.discord);

    // Update dynamic text
    document.querySelectorAll('[data-product-price]').forEach(el => el.textContent = shopConfig.product.price);
    document.querySelectorAll('[data-product-price-cta]').forEach(el => {
        el.textContent = `Get the Pack — ${shopConfig.product.price}`;
    });
    document.querySelectorAll('[data-product-name]').forEach(el => el.textContent = shopConfig.product.name);
    document.querySelectorAll('[data-product-desc]').forEach(el => el.textContent = shopConfig.product.description);
    document.querySelectorAll('[data-product-badge]').forEach(el => el.textContent = shopConfig.product.badge);

    // Populate "What's Inside" Grid
    const featuresGrid = document.getElementById('featuresGrid');
    if (featuresGrid) {
        shopConfig.product.categories.forEach((cat, index) => {
            const div = document.createElement('div');
            div.className = 'feature-card';
            const num = String(index + 1).padStart(2, '0');
            div.innerHTML = `
                <span class="feature-num">${num}</span>
                <h3 class="feature-title">${cat.title}</h3>
                <p>${cat.desc}</p>
            `;
            featuresGrid.appendChild(div);
        });
    }

    // Populate "Includes" Checklist (Product Showcase)
    const includesList = document.getElementById('includesList');
    if (includesList) {
        shopConfig.product.included.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            includesList.appendChild(li);
        });
    }

    // Populate Value List
    const valueList = document.getElementById('valueList');
    if (valueList) {
        shopConfig.product.included.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="value-check">✓</span> ${item}`;
            valueList.appendChild(li);
        });
    }

    // Populate Discord Features
    const discordFeatures = document.getElementById('discordFeatures');
    if (discordFeatures) {
        shopConfig.product.discordFeatures.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> ${item}`;
            discordFeatures.appendChild(li);
        });
    }

    // Populate FAQs
    const faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion) {
        shopConfig.faqs.forEach((faq, index) => {
            const item = document.createElement('div');
            item.className = 'faq-item';
            const id = `faq-answer-${index}`;
            item.innerHTML = `
                <button class="faq-question" aria-expanded="false" aria-controls="${id}">
                    ${faq.q}
                    <span class="faq-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </span>
                </button>
                <div class="faq-answer" id="${id}" role="region">
                    <p>${faq.a}</p>
                </div>
            `;
            faqAccordion.appendChild(item);
        });
    }

    // --- INTERACTIONS ---

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            toggleFaq(btn);
        });

        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFaq(btn);
            }
        });
    });

    function toggleFaq(btn) {
        const item = btn.parentElement;
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';

        // Close all others
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isExpanded) {
            item.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
        }
    }

    // Mobile Navigation
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        const hamburgerIcon = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>';
        const closeIcon = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 6L6 18M6 6l12 12"></path></svg>';

        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileNav.getAttribute('aria-expanded') === 'true';
            const newState = !isExpanded;

            mobileNav.setAttribute('aria-expanded', String(newState));
            mobileMenuBtn.setAttribute('aria-expanded', String(newState));
            mobileMenuBtn.innerHTML = newState ? closeIcon : hamburgerIcon;
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.innerHTML = hamburgerIcon;
            });
        });
    }

});
