import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const featuredDishes = [
  { name: "Saffron Lamb Shank", nameAr: "لحم ضأن بالزعفران", price: "185 AED", image: dish1 },
  { name: "Royal Seafood Platter", nameAr: "طبق المأكولات البحرية", price: "220 AED", image: dish2 },
  { name: "Pistachio Kunafa", nameAr: "كنافة بالفستق", price: "75 AED", image: dish3 },
];

const testimonials = [
  { text: "An unforgettable culinary journey. Every dish tells a story of heritage and innovation.", author: "Fatima Al-Rashid", role: "Food Critic, Gulf Today" },
  { text: "Zafran & Co. redefines what Middle Eastern fine dining can be. Simply extraordinary.", author: "James Chen", role: "Michelin Guide Reviewer" },
  { text: "The ambiance, the flavours, the service — perfection in every detail.", author: "Sara Al-Maktoum", role: "Dubai Lifestyle Magazine" },
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-primary font-sans text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in">
            Modern Middle Eastern Fine Dining
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 animate-fade-up">
            Zafran
            <span className="text-gold-gradient"> & </span>
            Co.
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-sans mb-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Where ancient flavours meet contemporary elegance
          </p>
          <p className="text-base text-muted-foreground font-sans mb-10 animate-fade-up" style={{ animationDelay: "300ms" }} dir="rtl">
            حيث تلتقي النكهات العريقة بالأناقة المعاصرة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Link
              to="/reservations"
              className="inline-block bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Reserve a Table · احجز طاولة
            </Link>
            <Link
              to="/menu"
              className="inline-block border border-primary text-primary font-sans text-sm tracking-widest uppercase px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              View Menu · القائمة
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* About */}
      <AnimatedSection>
        <section className="relative section-padding overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase mb-4">Our Story · قصتنا</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                A Legacy of <span className="text-gold-gradient">Flavour</span>
              </h2>
              <p className="text-foreground/70 font-sans leading-relaxed mb-4">
                Born from a reverence for the rich culinary traditions of the Middle East, 
                Zafran & Co. brings together centuries-old recipes with modern gastronomy. 
                Every dish is a tribute to the spice routes that connected civilizations.
              </p>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Our Executive Chef curates seasonal menus that honour heritage ingredients — 
                saffron from Iran, cardamom from Guatemala, rose water from Damascus — 
                transformed through contemporary techniques.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={aboutBg}
                  alt="Zafran & Co. restaurant interior"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary" />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Dishes */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase mb-4">Signature Creations · إبداعاتنا</p>
            <h2 className="text-3xl md:text-5xl font-bold">Featured Dishes</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <AnimatedSection key={dish.name} delay={i * 150}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm font-sans mb-2" dir="rtl">{dish.nameAr}</p>
                  <p className="text-primary font-sans text-sm tracking-wider">{dish.price}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase mb-4">Praise · إشادات</p>
            <h2 className="text-3xl md:text-5xl font-bold">What They Say</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="p-8 border border-border hover:border-primary/40 transition-colors duration-300">
                  <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="gold-divider mb-4" />
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground font-sans">{t.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="section-padding bg-card text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase mb-4">Experience · تجربة</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Table <span className="text-gold-gradient">Awaits</span>
            </h2>
            <p className="text-foreground/70 font-sans mb-10">
              Join us for an evening of extraordinary flavours, impeccable service, 
              and an ambiance that transports you.
            </p>
            <Link
              to="/reservations"
              className="inline-block bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase px-12 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Make a Reservation · احجز الآن
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
