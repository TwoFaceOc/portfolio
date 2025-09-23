import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com"; 
export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
 e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_c6q8a0i",   // 👈 انسخ من حساب EmailJS
        "template_aijw2v6",  // 👈 انسخ من حساب EmailJS
        e.target,
        "NEl-I89lZAY6z-9Wf"    // 👈 انسخ من حساب EmailJS
      )
      .then(
        () => {
          toast({
            title: t('messageSent'),
            description: t('messageSentDesc'),
          });
          setIsSubmitting(false);
          e.target.reset(); // يمسح الحقول بعد الإرسال
        },
        (error) => {
          toast({
            title: t('messageFailed'),
            description: error.text,
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('contactTitle')} <span className="text-primary">{t('contactTitle2')}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('contactDescription')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {t('contactInfo')}
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">{t('email')}</h4>
                  <a
                    href="mailto:a.ochaara@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    a.ochaara@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">{t('phone')}</h4>
                  <a
                    href="tel:+212604028065"
                    className="[direction:ltr] [unicode-bidi:isolate] text-muted-foreground hover:text-primary transition-colors "
                  >
                    +212604028065
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">{t('location')}</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Morocco
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">{t('connectWithMe')}</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/achraf-oc/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://x.com/achraf_oc" target="_blank">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/ach_coding/" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
  <h3 className="text-2xl font-semibold mb-6">{t('sendMessage')}</h3>

  {/* ربط الفورم مع handleSubmit */}
  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        {t('yourName')}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
        placeholder="Achraf Oc ..."
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        {t('yourEmail')}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
        placeholder="john@gmail.com"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        {t('yourMessage')}
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
        placeholder="Hello, I'd like to talk about..."
      />
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className={cn(
        "cosmic-button w-full flex items-center justify-center gap-2"
      )}
    >
      {isSubmitting ? t('sending') : t('sendMessageBtn')}
      <Send size={16} />
    </button>
  </form>
</div>

        </div>
      </div>
    </section>
  );
}; 