import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "@/hooks/use-toast";

const timeSlots = [
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  "10:00 PM", "10:30 PM", "11:00 PM",
];

const Reservations = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Reservation Confirmed!",
      description: `Thank you ${form.name}. We look forward to welcoming you on ${form.date} at ${form.time}.`,
    });
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", requests: "" });
  };

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300";

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-sans text-xs tracking-[0.4em] uppercase mb-4">
              Reservations · الحجوزات
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Reserve Your <span className="text-gold-gradient">Table</span>
            </h1>
            <p className="text-foreground/60 font-sans">
              Secure your place for an unforgettable dining experience in the heart of Dubai.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                    maxLength={255}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+971 XX XXX XXXX"
                  className={inputClass}
                  maxLength={20}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">
                    Time *
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                    <option value="9+">9+ (Private Dining)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground font-sans mb-2">
                  Special Requests · طلبات خاصة
                </label>
                <textarea
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                  placeholder="Dietary requirements, celebrations, seating preferences..."
                  rows={4}
                  className={inputClass + " resize-none"}
                  maxLength={500}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-300"
              >
                Confirm Reservation · تأكيد الحجز
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Reservations;
