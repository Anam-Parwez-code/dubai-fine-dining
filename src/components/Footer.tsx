import { Instagram, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Zafran & Co.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modern Middle Eastern fine dining, where ancient flavours meet contemporary elegance.
            </p>
            <p className="text-sm text-muted-foreground mt-1 font-sans" dir="rtl">
              مطبخ شرقي عصري راقٍ
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm tracking-widest uppercase text-primary font-sans">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Downtown Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={16} className="text-primary shrink-0" />
                <a href="https://instagram.com/zafranandco" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @zafranandco
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-sm tracking-widest uppercase text-primary font-sans">
              Opening Hours · ساعات العمل
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary shrink-0" />
                <div>
                  <p>Sun – Thu: 6:00 PM – 12:00 AM</p>
                  <p>Fri – Sat: 6:00 PM – 1:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Zafran & Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
