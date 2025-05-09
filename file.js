document.addEventListener('DOMContentLoaded', function() {
    // Language translations - only text content, no HTML
    const translations = {
        en: {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            hero_title: "Simple Portfolio",
            hero_text: "Over 10 years of experience in Product Ownership within E-Commerce, and SEO – my current focus: AI-powered solutions.",
            view_work: "View my work",
            about_title: "About me",
            about_subtitle: "As part of my retraining, I am creating a simple portfolio website.",
            about_text1: "With over 10 years of experience in Product Ownership within E-Commerce, I help companies strategically develop digital products.",
            about_text2: "My current focus is on integrating AI-powered approaches to make products smarter.",
            about_text3: "Additionally, I bring extensive expertise in SEO management to enhance digital visibility.",
            // ... rest of English translations
        },
        de: {
            home: "Startseite",
            about: "Über mich",
            skills: "Fähigkeiten",
            projects: "Projekte",
            contact: "Kontakt",
            hero_title: "Einfaches Portfolio",
            hero_text: "Über 10 Jahre Erfahrung in Produktmanagement, Business Analyse und SEO – mein aktueller Fokus: KI-gestützte Lösungen.",
            view_work: "Meine Arbeit ansehen",
            about_title: "Über mich",
            about_subtitle: "Im Rahmen meiner Umschulung erstelle ich eine einfache Portfolio-Website.",
            about_text1: "Mit über 10 Jahren Erfahrung in Produktmanagement und Business Analyse unterstütze ich Unternehmen bei der Entwicklung digitaler Produkte.",
            about_text2: "Mein Fokus liegt auf KI-gestützten Ansätzen, um Produkte intelligenter zu machen.",
            about_text3: "Zusätzlich bringe ich Expertise im SEO-Management mit, um die digitale Sichtbarkeit zu verbessern.",
            // ... rest of German translations
        }
    };

    // Function to safely update element content
    function updateElementContent(element, content) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.value = content;
        } else if (element.hasAttribute('placeholder')) {
            element.placeholder = content;
        } else {
            element.textContent = content;
        }
    }

    // Function to change language
    function changeLanguage(lang) {
        // Update all simple text elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                updateElementContent(element, translations[lang][key]);
            }
        });

        // Update complex elements with HTML formatting
        const aboutText1 = document.querySelector('[data-i18n="about_text1"]');
        const aboutText2 = document.querySelector('[data-i18n="about_text2"]');
        const aboutText3 = document.querySelector('[data-i18n="about_text3"]');

        if (lang === 'en') {
            aboutText1.innerHTML = "With over 10 years of experience in <b>Product Ownership</b> within <b>E-Commerce</b>, I help companies strategically develop digital products.";
            aboutText2.innerHTML = "My current focus is on integrating <b>AI-powered approaches</b> to make products smarter.";
            aboutText3.innerHTML = "Additionally, I bring extensive expertise in <b>SEO management</b> to enhance digital visibility.";
        } else {
            aboutText1.innerHTML = "Mit über 10 Jahren Erfahrung in <b>Produktmanagement</b> und <b>Business Analyse</b> unterstütze ich Unternehmen bei der Entwicklung digitaler Produkte.";
            aboutText2.innerHTML = "Mein Fokus liegt auf <b>KI-gestützten Ansätzen</b>, um Produkte intelligenter zu machen.";
            aboutText3.innerHTML = "Zusätzlich bringe ich Expertise im <b>SEO-Management</b> mit, um die digitale Sichtbarkeit zu verbessern.";
        }

        // Update active button
        document.querySelectorAll('.language-switcher button').forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            }
        });

        // Save preference
        localStorage.setItem('language', lang);
    }

    // Set up language switcher buttons
    document.querySelectorAll('.language-switcher button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Initialize with saved language or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    changeLanguage(savedLang);

    // Mobile menu and smooth scrolling code remains the same
    // ...
});