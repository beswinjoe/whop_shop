/**
 * BESWIN Shop Configuration
 * Centralized data for the single-product storefront.
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
                desc: "Ready-to-use structures and layouts for Discord communities."
            },
            {
                title: "Community Resources",
                desc: "Resources that help with organizing and managing communities."
            },
            {
                title: "Tools & Configurations",
                desc: "Useful digital resources for setting up and improving your server."
            },
            {
                title: "Bonus Resources",
                desc: "Additional resources included with the pack."
            }
        ],
        included: [
            "Premium Server Templates",
            "Moderation Guidelines",
            "Bot Configuration Files",
            "Community Checklists",
            "Channel Architecture Maps"
        ],
        discordFeatures: [
            "Server organization",
            "Templates",
            "Community setup",
            "Resources",
            "Bots",
            "Roles",
            "Channels"
        ]
    },
    faqs: [
        {
            q: "What's included?",
            a: "The BESWIN Pack includes Discord server templates, community management resources, tool configurations, and bonus checklists."
        },
        {
            q: "How much does it cost?",
            a: "The pack is $10."
        },
        {
            q: "Is it a subscription?",
            a: "No. It is a one-time purchase."
        },
        {
            q: "Where do I get it?",
            a: "Through the official Whop product page."
        },
        {
            q: "Can I use the resources for my own Discord?",
            a: "Yes, you can use these resources to build and configure your own Discord communities."
        },
        {
            q: "Will more things be added?",
            a: "Yes, any future updates or additions to the pack will be included."
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

    // Update URLs
    document.querySelectorAll('.whop-cta').forEach(el => el.href = shopConfig.product.whopUrl);
    document.querySelectorAll('[data-url-website]').forEach(el => el.href = shopConfig.links.website);
    document.querySelectorAll('[data-url-github]').forEach(el => el.href = shopConfig.links.github);
    document.querySelectorAll('[data-url-discord]').forEach(el => el.href = shopConfig.links.discord);

    // Update Text Data
    document.querySelectorAll('[data-product-price]').forEach(el => el.textContent = shopConfig.product.price);
    document.querySelectorAll('[data-product-price-cta]').forEach(el => el.innerHTML = `Get the ${shopConfig.product.price} Pack &rarr;`);
    document.querySelectorAll('[data-product-name]').forEach(el => el.textContent = shopConfig.product.name);
    document.querySelectorAll('[data-product-desc]').forEach(el => el.textContent = shopConfig.product.description);
    document.querySelectorAll('[data-product-badge]').forEach(el => el.textContent = shopConfig.product.badge);

    // Populate "What's Inside" Grid
    const featuresGrid = document.getElementById('featuresGrid');
    if (featuresGrid) {
        shopConfig.product.categories.forEach(cat => {
            const div = document.createElement('div');
            div.className = 'feature-card';
            div.innerHTML = `<h3 class="feature-title">${cat.title}</h3><p>${cat.desc}</p>`;
            featuresGrid.appendChild(div);
        });
    }

    // Populate "Includes" Checklist
    const includesList = document.getElementById('includesList');
    if (includesList) {
        shopConfig.product.included.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            includesList.appendChild(li);
        });
    }

    // Populate Discord Features
    const discordFeatures = document.getElementById('discordFeatures');
    if (discordFeatures) {
        shopConfig.product.discordFeatures.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: #0f0f0f"><polyline points="20 6 9 17 4 12"></polyline></svg> ${item}`;
            discordFeatures.appendChild(li);
        });
    }

    // Populate FAQs
    const faqAccordion = document.getElementById('faqAccordion');
    if (faqAccordion) {
        shopConfig.faqs.forEach(faq => {
            const item = document.createElement('div');
            item.className = 'faq-item';
            item.innerHTML = `
                <button class="faq-question" aria-expanded="false">
                    ${faq.q}
                    <span class="faq-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </span>
                </button>
                <div class="faq-answer"><p>${faq.a}</p></div>
            `;
            faqAccordion.appendChild(item);
        });
    }

    // --- INTERACTIONS ---

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
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
        });
    });

    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileNav.getAttribute('aria-expanded') === 'true';
            mobileNav.setAttribute('aria-expanded', !isExpanded);
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle icon
            if (!isExpanded) {
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 6L6 18M6 6l12 12"></path></svg>';
            } else {
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>';
            }
        });
    }

    // Close mobile nav when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>';
        });
    });

});
