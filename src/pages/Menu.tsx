import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["Starters", "Mains", "Desserts", "Drinks"] as const;
const categoryAr: Record<string, string> = {
  Starters: "المقبلات",
  Mains: "الأطباق الرئيسية",
  Desserts: "الحلويات",
  Drinks: "المشروبات",
};

interface MenuItem {
  name: string;
  nameAr: string;
  description: string;
  price: string;
}

const menuData: Record<string, MenuItem[]> = {
  Starters: [
    { name: "Truffle Hummus", nameAr: "حمص بالكمأة", description: "Slow-roasted chickpeas, black truffle oil, sumac crisp", price: "55 AED" },
    { name: "Saffron Soup", nameAr: "شوربة الزعفران", description: "Roasted butternut, saffron threads, toasted pine nuts", price: "65 AED" },
    { name: "Lamb Kibbeh", nameAr: "كبة لحم", description: "Hand-pressed bulgur shell, spiced lamb, pomegranate glaze", price: "70 AED" },
    { name: "Charred Halloumi", nameAr: "حلومي مشوي", description: "Grilled halloumi, fig compote, za'atar honey drizzle", price: "60 AED" },
    { name: "Mezze Royale", nameAr: "مزة ملكية", description: "Selection of baba ghanoush, muhammara, labneh, warm bread", price: "95 AED" },
  ],
  Mains: [
    { name: "Saffron Lamb Shank", nameAr: "لحم ضأن بالزعفران", description: "Slow-braised 12hr lamb, saffron jus, roasted root vegetables", price: "185 AED" },
    { name: "Royal Seafood Platter", nameAr: "طبق المأكولات البحرية", description: "Grilled prawns, hammour, calamari, chermoula butter", price: "220 AED" },
    { name: "Wagyu Kebab", nameAr: "كباب واغيو", description: "A5 wagyu mince, smoked aubergine purée, charred onion", price: "195 AED" },
    { name: "Spiced Duck Breast", nameAr: "صدر بط متبل", description: "Baharat-rubbed duck, date molasses, quinoa tabbouleh", price: "175 AED" },
    { name: "Ouzi Risotto", nameAr: "ريزوتو أوزي", description: "Pulled lamb shoulder, toasted almonds, cinnamon-infused rice", price: "160 AED" },
  ],
  Desserts: [
    { name: "Pistachio Kunafa", nameAr: "كنافة بالفستق", description: "Crisp kadaif pastry, Akkawi cheese, rose syrup, pistachios", price: "75 AED" },
    { name: "Saffron Crème Brûlée", nameAr: "كريم بروليه بالزعفران", description: "Persian saffron custard, cardamom tuile", price: "65 AED" },
    { name: "Date Sticky Toffee", nameAr: "حلوى التمر", description: "Medjool date cake, salted caramel, vanilla ice cream", price: "70 AED" },
    { name: "Rose Panna Cotta", nameAr: "بانا كوتا بالورد", description: "Damask rose cream, pomegranate jewels, edible gold", price: "68 AED" },
  ],
  Drinks: [
    { name: "Saffron Lemonade", nameAr: "ليمونادة الزعفران", description: "Fresh lemon, saffron threads, sparkling water", price: "35 AED" },
    { name: "Arabic Coffee", nameAr: "قهوة عربية", description: "Cardamom-infused, served with dates", price: "25 AED" },
    { name: "Rose Mint Tea", nameAr: "شاي بالورد والنعناع", description: "Fresh mint, Damascus rose buds, honey", price: "30 AED" },
    { name: "Pomegranate Mojito", nameAr: "موهيتو رمان", description: "Non-alcoholic, fresh pomegranate, lime, mint", price: "45 AED" },
    { name: "Oud-Smoked Latte", nameAr: "لاتيه بالعود", description: "Espresso, oud-infused milk, cardamom foam", price: "40 AED" },
  ],
};

const Menu = () => {
  const [active, setActive] = useState<string>("Starters");

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding text-center">
        <AnimatedSection>
          <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase mb-4">Our Menu · قائمتنا</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            A Culinary <span className="text-gold-gradient">Odyssey</span>
          </h1>
          <p className="text-foreground/60 font-sans max-w-xl mx-auto">
            Each dish is a chapter in our story — crafted with the finest ingredients 
            from across the Middle East and beyond.
          </p>
        </AnimatedSection>
      </section>

      {/* Category tabs */}
      <div className="sticky top-[72px] z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto flex justify-center gap-2 px-4 py-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs tracking-widest uppercase px-6 py-2.5 transition-all duration-300 whitespace-nowrap ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border hover:border-primary/40"
              }`}
            >
              {cat} · {categoryAr[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {menuData[active]?.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 80}>
                <div className="group py-8 border-b border-border hover:border-primary/30 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-sans" dir="rtl">{item.nameAr}</p>
                    </div>
                    <span className="text-primary font-sans text-sm tracking-wider whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/50 font-sans">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
