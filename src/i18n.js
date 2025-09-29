import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",

      // Hero Section
      heroGreeting: "Hi, I'm",
      heroName: "Achraf",
      heroSurname: "Oc",
      heroDescription:
        "I create full-stack web applications that people enjoy using. I focus on clean, intuitive interfaces and strong back-end systems",
      viewWork: "View My Work",
      scroll: "Scroll",

      // About Section
      aboutTitle: "About",
      aboutSurname: "Me",
      aboutSubtitle: "Passionate Web Developer & Tech Creator",
      aboutDescription1:
        "I've been working in web development for a little over 3 years, and during that time I've had the chance to build applications that are responsive, accessible, and high-performing. I enjoy working across the full stack, whether it's crafting clean, user-friendly interfaces or building reliable back-end systems.",
      aboutDescription2:
        "What really excites me is solving complex problems in simple, elegant ways. I see every project as an opportunity to learn something new, whether it's a modern framework, a best practice, or just a smarter way of doing things.",
      getInTouch: "Get In Touch",
      downloadCV: "Download CV",
      webDevelopment: "Web Development",
      webDevelopmentDesc:
        "Creating responsive websites and web applications with modern frameworks.",
      uiUxDesign: "UI/UX Design",
      uiUxDesignDesc:
        "Designing intuitive user interfaces and seamless user experiences.",
      projectManagement: "Project Management",
      projectManagementDesc:
        "Leading projects from conception to completion with agile methodologies.",

      // Skills Section
      skillsTitle: "My",
      skills2: "Skills",
      all: "All",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",

      // Projects Section
      projectsTitle: "Featured",
      projectsTitle2: " Projects",
      projectsDescription:
        "Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.",
      checkGithub: "Check My Github",

      // Contact Section
      contactTitle: "Get In",
      contactTitle2: "Touch",
      contactDescription:
        "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
      contactInfo: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      connectWithMe: "Connect With Me",
      sendMessage: "Send a Message",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
      sending: "Sending...",
      sendMessageBtn: "Send Message",
      messageSent: "Message sent! ✅",
      messageSentDesc: "Thank you for your message. I'll get back to you soon.",
      messageFailed: "Failed to send ❌",

      // Footer
      footerText: "© 2025 AchrafOc. All rights reserved.",

      // Language Toggle
      language: "Language",
    },
  },
  ar: {
    translation: {
      // Navigation
      home: "الرئيسية",
      about: "معلومات عني",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "اتصل بي",

      // Hero Section
      heroGreeting: "مرحباً، أنا",
      heroName: "أشرف",
      heroSurname: "اولاد شعرة",
      heroDescription:
        "أُنشئ تطبيقات ويب متكاملة يستمتع الناس باستخدامها. أُركز على واجهات استخدام واضحة وسهلة الاستخدام وأنظمة خلفية قوية.",
      viewWork: "شاهد أعمالي",
      scroll: "مرر",

      // About Section
      aboutTitle: "معلومات ",
      aboutSurname: "عني",
      aboutSubtitle: "مطور ويب شغوف ومبدع تقني",
      aboutDescription1:
        "أعمل في مجال تطوير الويب منذ ما يزيد قليلاً عن ثلاث سنوات، وخلال تلك الفترة أتيحت لي فرصة بناء تطبيقات سريعة الاستجابة وسهلة الوصول وعالية الأداء. أستمتع بالعمل على جميع منصات التطوير، سواءً كان ذلك من خلال تصميم واجهات مستخدم واضحة وسهلة الاستخدام أو بناء أنظمة خلفية موثوقة.",
      aboutDescription2:
        "ما يثيرني حقاً هو حل المشاكل المعقدة بطرق بسيطة وأنيقة. أرى كل مشروع كفرصة لتعلم شيء جديد، سواء كان إطار عمل حديث أو أفضل ممارسة أو مجرد طريقة أذكى للقيام بالأشياء.",
      getInTouch: "تواصل معي",
      downloadCV: "تحميل السيرة الذاتية",
      webDevelopment: "تطوير الويب",
      webDevelopmentDesc:
        "إنشاء مواقع ويب وتطبيقات ويب سريعة الاستجابة بإطارات عمل حديثة.",
      uiUxDesign: "تصميم واجهة المستخدم",
      uiUxDesignDesc: "تصميم واجهات مستخدم بديهية وتجارب مستخدم سلسة.",
      projectManagement: "إدارة المشاريع",
      projectManagementDesc:
        "قيادة المشاريع من التصور إلى الإنجاز بمنهجيات رشيقة.",

      // Skills Section
      skillsTitle: "",
      skills2: "المهارات",
      all: "الكل",
      frontend: "الواجهة الأمامية",
      backend: "الخادم",
      tools: "الأدوات",

      // Projects Section
      projectsTitle: "المشاريع ",
      projectsTitle2: "المميزة",
      projectsDescription:
        "إليك بعض مشاريعي الأخيرة. تم إنشاء كل مشروع بعناية مع التركيز على التفاصيل والأداء وتجربة المستخدم.",
      checkGithub: "تحقق من Github الخاص بي",

      // Contact Section
      contactTitle: "تواصل ",
      contactTitle2: "معي",
      contactDescription:
        "هل لديك مشروع في ذهنك أو تريد التعاون؟ لا تتردد في التواصل. أنا منفتح دائماً لمناقشة الفرص الجديدة.",
      contactInfo: "معلومات الاتصال",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      connectWithMe: "تواصل معي",
      sendMessage: "إرسال رسالة",
      yourName: "اسمك",
      yourEmail: "بريدك الإلكتروني",
      yourMessage: "رسالتك",
      sending: "جاري الإرسال...",
      sendMessageBtn: "إرسال الرسالة",
      messageSent: "تم إرسال الرسالة! ✅",
      messageSentDesc: "شكراً لرسالتك. سأعود إليك قريباً.",
      messageFailed: "فشل في الإرسال ❌",

      // Footer
      footerText: "© 2025 أشرف اولاد شعرة. جميع الحقوق محفوظة.",

      // Language Toggle
      language: "اللغة",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en", // get from localStorage or default to en
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // react already does escaping
  },
});

export default i18n;
