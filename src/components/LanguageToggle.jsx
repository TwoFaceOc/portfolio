import { Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ar')) {
      setCurrentLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
      // Set document direction for Arabic
      document.documentElement.dir = storedLanguage === 'ar' ? 'rtl' : 'ltr';
    } else {
      localStorage.setItem("language", "en");
      setCurrentLanguage("en");
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    
    // Set document direction for Arabic
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <button 
      onClick={toggleLanguage} 
      className={cn(
        "fixed max-sm:hidden top-5 right-16 z-50 p-2 rounded-full transition-colors duration-300",
        "bg-background/80 backdrop-blur-sm border border-border/50",
        "hover:bg-background/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
      )}
      title={currentLanguage === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <div className="flex items-center space-x-1">
        <Languages className="h-4 w-4 text-foreground" />
        <span className="text-sm font-medium text-foreground">
          {currentLanguage === 'en' ? 'AR' : 'EN'}
        </span>
      </div>
    </button>
  );
};
