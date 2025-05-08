document.addEventListener('DOMContentLoaded', function() {
    // Language translations with HTML tags properly formatted
    const translations = {
        en: {
            home: "Home",
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            hero_title: "Simple Portfolio",
            hero_text: "Over 10 years of experience in Product Ownership within E-Commerce, and SEO Management– my current focus: AI-powered solutions.",
            view_work: "View my work",
            about_title: "About me",
            about_subtitle: "As part of my retraining, I am creating a simple portfolio website.",
            about_text1: "With over 10 years of experience in <b>Product Ownership</b> within <b>E-Commerce</b>, I help companies strategically develop digital products. I connect user needs with clear business requirements and ensure that products are developed efficiently and purposefully.",
            about_text2: "My current focus is on integrating <b>AI-powered approaches</b> to make products smarter and optimize processes.",
            about_text3: "Additionally, I bring extensive expertise in <b>SEO management</b> to enhance digital visibility and create sustainable value.",
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
            project1_text: "I analyze requirements, define the product vision, and prioritize the backlog to maximize product value. Through close collaboration with stakeholders and cross-functional teams, I ensure the product meets market needs.<br><br>Using agile methodologies and data-driven decisions, I consistently strive to create added value for the company.",
            project2_title: "Website & E-Commerce",
            project2_text: "Complete modern website and e-commerce solutions, both frontend and backend, including ERP integration<br><br>We offer intelligent AI automation that efficiently optimizes business processes and future-proofs your company. With tailored solutions, we enhance user experience and improve performance.",
            project3_title: "My Work",
            project3_text: "Please log in to access this content, as certain areas are reserved for registered users to ensure privacy and security, provide a personalized experience, and unlock exclusive features<br><br>if you don't have an account yet, you can easily register to get started.",
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
            about_text1: "Mit über 10 Jahren Erfahrung in <b>Produktmanagement</b> und <b>Business Analyse</b> unterstütze ich Unternehmen bei der strategischen Entwicklung digitaler Produkte. Ich verbinde Benutzerbedürfnisse mit klaren Geschäftsanforderungen und stelle sicher, dass Produkte effizient und zielgerichtet entwickelt werden.",
            about_text2: "Mein aktueller Fokus liegt auf der Integration <b>KI-gestützter Ansätze</b>, um Produkte intelligenter zu machen und Prozesse zu optimieren.",
            about_text3: "Zusätzlich bringe ich umfangreiche Expertise im <b>SEO-Management</b> mit, um die digitale Sichtbarkeit zu verbessern und nachhaltigen Wert zu schaffen.",
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
            project1_text: "Ich analysiere Anforderungen, definiere die Produktvision und priorisiere das Backlog, um den Produktwert zu maximieren. Durch enge Zusammenarbeit mit Stakeholdern und cross-funktionalen Teams stelle ich sicher, dass das Produkt den Marktanforderungen entspricht.<br><br>Mit agilen Methoden und datengesteuerten Entscheidungen strebe ich konsequent danach, Mehrwert für das Unternehmen zu schaffen.",
            project2_title: "Website & E-Commerce",
            project2_text: "Komplette moderne Website- und E-Commerce-Lösungen, sowohl Frontend als auch Backend, einschließlich ERP-Integration<br><br>Wir bieten intelligente KI-Automatisierung, die Geschäftsprozesse effizient optimiert und Ihr Unternehmen zukunftssicher macht. Mit maßgeschneiderten Lösungen verbessern wir die Benutzererfahrung und die Leistung.",
            project3_title: "Meine Arbeit",
            project3_text: "Bitte loggen Sie sich ein, um auf diesen Inhalt zuzugreifen, da bestimmte Bereiche registrierten Benutzern vorbehalten sind, um Datenschutz und Sicherheit zu gewährleisten, ein personalisiertes Erlebnis zu bieten und exklusive Funktionen freizuschalten.<br><br>Wenn Sie noch kein Konto haben, können Sie sich einfach registrieren, um loszulegen.",
            view_project: "Projekt ansehen",
            contact_title: "Kontaktieren Sie mich",
            name_label: "Name",
            email_label: "E-Mail",
            message_label: "Nachricht",
            send_button: "Nachricht senden",
            footer_text: "Erstellt von Gift Anthony © 2025"
        }
    };

    // Improved language switching function
    function changeLanguage(lang) {
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');

            if (translations[lang] && translations[lang][key]) {
                // Handle different element types appropriately
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translations[lang][key];
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else {
                    // Use innerHTML for elements that contain HTML tags
                    element.innerHTML = translations[lang][key];
                }
            }
        });
    }

    // Initialize language switcher buttons
    function initLanguageSwitcher() {
        const buttons = document.querySelectorAll('.language-switcher button');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');

                // Update active button
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Change language
                changeLanguage(lang);

                // Save preference
                localStorage.setItem('preferredLanguage', lang);
            });
        });

        // Set initial language
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        const activeButton = document.querySelector(`.language-switcher button[data-lang="${savedLang}"]`);

        if (activeButton) {
            activeButton.classList.add('active');
            changeLanguage(savedLang);
        } else {
            // Fallback to English
            buttons[0].classList.add('active');
            changeLanguage('en');
        }
    }

    // Initialize all functionality
    function init() {
        initLanguageSwitcher();

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Close menu when clicking links
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
    }

    // Start everything
    init();
});