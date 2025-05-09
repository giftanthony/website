document.addEventListener('DOMContentLoaded', function() {
    // Language translations with HTML handling
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
            about_text1: "With over 10 years of experience in <b>Product Ownership</b> within <b>E-Commerce</b>, I help companies strategically develop digital products.",
            about_text2: "My current focus is on integrating <b>AI-powered approaches</b> to make products smarter.",
            about_text3: "Additionally, I bring extensive expertise in <b>SEO management</b> to enhance digital visibility.",
            skills_title: "My Skills",
            skill1_title: "HTML5 / CSS3",
            skill1_text: "Structure, Function, Design",
            skill2_title: "Jira & more",
            skill2_text: "Project management tool",
            skill3_title: "JavaScript",
            skill3_text: "Interactive Web Development",
            skill4_title: "Python / Pycharm",
            skill4_text: "AI-powered solutions & API",
            projects_title: "My Projects",
            project1_title: "Product Owner",
            project1_text: "I analyze requirements and prioritize the backlog. Through collaboration, I ensure the product meets market needs.",
            project2_title: "Website & E-Commerce",
            project2_text: "Complete modern website solutions. We offer intelligent automation that optimizes business processes.",
            project3_title: "My Work",
            project3_text: "Please log in to access this content. Certain areas are reserved for registered users.",
            view_project: "View Project",
            contact_title: "Contact me",
            name_label: "Name",
            email_label: "Email",
            message_label: "Message",
            send_button: "Send Message",
            footer_text: "Made by Gift Anthony © 2025"
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
            about_text1: "Mit über 10 Jahren Erfahrung in <b>Produktmanagement</b> und <b>Business Analyse</b> unterstütze ich Unternehmen bei der Entwicklung digitaler Produkte.",
            about_text2: "Mein Fokus liegt auf <b>KI-gestützten Ansätzen</b>, um Produkte intelligenter zu machen.",
            about_text3: "Zusätzlich bringe ich Expertise im <b>SEO-Management</b> mit.",
            skills_title: "Meine Fähigkeiten",
            skill1_title: "HTML5 / CSS3",
            skill1_text: "Struktur, Funktion, Design",
            skill2_title: "Jira & mehr",
            skill2_text: "Projektmanagement-Tool",
            skill3_title: "JavaScript",
            skill3_text: "Interaktive Webentwicklung",
            skill4_title: "Python / Pycharm",
            skill4_text: "KI-gestützte Lösungen & API",
            projects_title: "Meine Projekte",
            project1_title: "Produktmanager",
            project1_text: "Ich analysiere Anforderungen und priorisiere das Backlog. Durch Zusammenarbeit stelle ich sicher, dass das Produkt den Marktanforderungen entspricht.",
            project2_title: "Website & E-Commerce",
            project2_text: "Komplette moderne Website-Lösungen. Wir bieten intelligente Automatisierung, die Geschäftsprozesse optimiert.",
            project3_title: "Meine Arbeit",
            project3_text: "Bitte loggen Sie sich ein, um auf diesen Inhalt zuzugreifen. Bestimmte Bereiche sind für registrierte Benutzer reserviert.",
            view_project: "Projekt ansehen",
            contact_title: "Kontaktieren Sie mich",
            name_label: "Name",
            email_label: "E-Mail",
            message_label: "Nachricht",
            send_button: "Nachricht senden",
            footer_text: "Erstellt von Gift Anthony © 2025"
        }
    };

    // Function to change language
    function changeLanguage(lang) {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translations[lang][key];
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else {
                    // For elements that need to render HTML
                    element.innerHTML = translations[lang][key];
                }
            }
        });

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

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});