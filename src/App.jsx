import { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Instagram, MapPin, Clock, Utensils, Leaf } from "lucide-react";

const menuItems = [
  { category: "TO BEGIN", name: "Warm sourdough", detail: "Cultured butter, flaky salt", price: "$8", tag: "A HOUSE FAVORITE" },
  { category: "TO BEGIN", name: "Burrata & peaches", detail: "Basil, aged balsamic, grilled bread", price: "$16", tag: "SEASONAL" },
  { category: "FROM THE KITCHEN", name: "Rigatoni pomodoro", detail: "Slow tomato, parmesan, fresh basil", price: "$22", tag: "VEGETARIAN" },
  { category: "FROM THE KITCHEN", name: "Roast chicken", detail: "Lemon pan jus, crispy potatoes, herbs", price: "$28", tag: "" },
  { category: "FROM THE KITCHEN", name: "Mushroom toast", detail: "Wild mushrooms, thyme, whipped ricotta", price: "$19", tag: "VEGETARIAN" },
  { category: "SOMETHING SWEET", name: "Olive oil cake", detail: "Citrus cream, seasonal fruit", price: "$11", tag: "A LITTLE TREAT" }
];

const photos = [
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85", alt: "Fresh pasta with herbs on a ceramic plate", label: "MADE WITH THE SEASONS" },
  { src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85", alt: "Fresh colorful seasonal salad", label: "A LITTLE SOMETHING GREEN" },
  { src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85", alt: "Toast with fresh fruit and cream", label: "SAVE ROOM FOR SWEET" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", date: "", time: "7:00 PM", guests: "2", note: "" });
  const [sent, setSent] = useState(false);
  const whatsappNumber = "15551234567";

  const closeMenu = () => setMenuOpen(false);
  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSent(false);
  };
  const submitBooking = (event) => {
    event.preventDefault();
    const message = `Hi Sunday Table! I'd like to request a table.\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}${form.note ? `\nNotes: ${form.note}` : ""}\nPlease let me know if this is available.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div id="top" className="site-shell">
      <div className="announcement"><span>GOOD FOOD, GOOD COMPANY</span><span className="announcement-right"><span className="status-dot" /> WALK-INS WELCOME WHEN WE CAN</span></div>
      <header className="header">
        <a className="wordmark" href="#top" onClick={closeMenu}>sunday<span>table</span><i>®</i></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#menu" onClick={closeMenu}>The menu</a>
          <a href="#gallery" onClick={closeMenu}>At the table</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-cta" href="#book" onClick={closeMenu}>Book a table <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> YOUR NEIGHBORHOOD TABLE</p>
            <h1>Come hungry.<br />Leave a little <em>happier.</em></h1>
            <p className="hero-description">Seasonal plates, thoughtful pours, and the kind of evenings that make you forget to check your phone.</p>
            <div className="hero-actions"><a className="button button-dark" href="#menu">Explore the menu <ArrowDownRight size={17} /></a><a className="text-link" href="#story">A little about us <ArrowRight size={16} /></a></div>
            <div className="hero-note"><span className="note-icon"><Utensils size={17} /></span><span><strong>Cooked with care.</strong><br />Served with a little extra.</span></div>
          </div>
          <div className="hero-visual">
            <img className="hero-image" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=90" alt="Beautifully set restaurant table with warm natural light" />
            <div className="image-stamp"><span>MADE FOR</span><strong>the long<br /><em>lunch</em></strong><span>AND ONE MORE</span></div>
            <div className="image-caption"><span>01 / 03</span><span>A PLACE TO SETTLE IN</span></div>
          </div>
        </section>

        <div className="ticker" aria-label="Seasonal food, local ingredients, good company"><span>SEASONAL BY NATURE</span><span>✳</span><span>LOCAL WHEN POSSIBLE</span><span>✳</span><span>ALWAYS ROOM FOR ONE MORE</span><span>✳</span><span>SEASONAL BY NATURE</span></div>

        <section id="story" className="story section-pad">
          <div className="section-kicker"><span>01 / A SEAT AT OUR TABLE</span><span>GOOD THINGS TAKE TIME</span></div>
          <div className="story-grid">
            <div><h2>Not just a meal.<br />A reason to <em>stay.</em></h2></div>
            <div className="story-copy"><p>Sunday Table started with a simple thought: food tastes better when you slow down and share it. So we built a neighborhood spot around seasonal ingredients, familiar faces, and plates made to pass around.</p><p>No dress code. No special occasion needed. Just come as you are.</p><a className="underlined-link" href="#visit">Pull up a chair <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="values-row"><div><span>01</span><strong>In season, always</strong><p>We let good ingredients lead the way.</p></div><div><span>02</span><strong>Made from scratch</strong><p>Thoughtful cooking, without the fuss.</p></div><div><span>03</span><strong>Room for everyone</strong><p>Your table, your people, your pace.</p></div></div>
        </section>

        <section id="menu" className="menu-section">
          <div className="menu-heading section-pad"><div className="section-kicker"><span>02 / SOMETHING GOOD</span><span>A MENU THAT FOLLOWS THE SEASONS</span></div><div className="menu-title-row"><h2>A few of our<br /><em>favorites.</em></h2><p>Our menu changes with the market and the mood. Here are a few things you might find on the table.</p></div></div>
          <div className="menu-list">
            {menuItems.map((item, index) => <article className="menu-item" key={item.name}><span className="menu-index">{String(index + 1).padStart(2, "0")}</span><div className="menu-item-copy"><span className="menu-category">{item.category}</span><h3>{item.name} {item.tag && <span className="item-tag">{item.tag}</span>}</h3><p>{item.detail}</p></div><span className="menu-price">{item.price}</span></article>)}
          </div>
          <p className="menu-disclaimer">SAMPLE MENU FOR DEMO PURPOSES · ITEMS, PRICES, AND AVAILABILITY MAY CHANGE</p>
        </section>

        <section id="gallery" className="gallery-section section-pad">
          <div className="section-kicker"><span>03 / FROM OUR KITCHEN</span><span>FRESH FROM THE PASS</span></div>
          <div className="gallery-heading"><h2>Made to be <em>shared.</em></h2><p>A little color, a little crunch, and always one more bite.</p></div>
          <div className="photo-grid">{photos.map((photo, index) => <figure className={`food-photo food-photo-${index + 1}`} key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /><figcaption><span>0{index + 1}</span>{photo.label}</figcaption></figure>)}</div>
        </section>

        <section className="quote-section"><span className="quote-mark">“</span><blockquote>The best part of going out<br />is having <em>nowhere else to be.</em></blockquote><span className="quote-credit">A SUNDAY TABLE KIND OF FEELING</span></section>

        <section id="book" className="booking-section section-pad">
          <div className="booking-copy"><p className="eyebrow"><span className="eyebrow-line" /> SAVE YOURSELF A SEAT</p><h2>Your table<br />is <em>waiting.</em></h2><p>Celebrating something, catching up, or just hungry? Tell us when you're coming and we'll get the table ready.</p><div className="booking-small"><Clock size={18} /><span>For same-day plans, give us a call.</span></div></div>
          <form className="booking-form" onSubmit={submitBooking}>
            <div className="form-top"><span>TABLE REQUEST</span><span>01 — 05</span></div>
            <label>Your name<input name="name" value={form.name} onChange={update} placeholder="How should we greet you?" required /></label>
            <div className="form-row"><label>Date<input name="date" type="date" value={form.date} onChange={update} min={new Date().toISOString().split("T")[0]} required /></label><label>Time<select name="time" value={form.time} onChange={update}><option>5:00 PM</option><option>5:30 PM</option><option>6:00 PM</option><option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option><option>8:30 PM</option></select></label></div>
            <label>Party size<select name="guests" value={form.guests} onChange={update}><option value="1">Just me</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5 guests</option><option value="6">6 guests</option><option value="7+">7+ guests (we'll coordinate)</option></select></label>
            <label>Anything we should know? <span className="optional">(OPTIONAL)</span><textarea name="note" value={form.note} onChange={update} placeholder="A birthday, a dietary note, a favorite corner..." rows="2" /></label>
            <button className="button button-dark submit-button" type="submit">Request a table <ArrowUpRight size={17} /></button>
            {sent && <p className="form-feedback" role="status">Your message is ready in WhatsApp. Send it there to complete your request.</p>}
            <p className="form-footnote">This demo opens a pre-filled WhatsApp message. Your reservation is not confirmed until the restaurant replies.</p>
          </form>
        </section>

        <section id="visit" className="visit-section section-pad">
          <div className="section-kicker"><span>04 / COME ON IN</span><span>WE'LL PUT THE KETTLE ON</span></div>
          <div className="visit-grid"><div><h2>Find your<br /><em>way here.</em></h2><p>Good food is closer than you think. Come by, say hello, and stay a while.</p><a className="underlined-link" href="https://maps.google.com/?q=your+restaurant+address" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a></div><div className="visit-detail"><MapPin size={19} /><div><span>COME FIND US</span><p>123 Market Street<br />Your City, ST 00000</p></div></div><div className="visit-detail"><Clock size={19} /><div><span>WHEN WE'RE HERE</span><p>Tue – Thu · 11am – 9pm<br />Fri – Sat · 11am – 10pm<br />Sun · 10am – 4pm<br />Monday · Closed</p></div></div></div>
        </section>
      </main>

      <footer className="footer"><div className="footer-main"><a className="wordmark footer-wordmark" href="#top">sunday<span>table</span><i>®</i></a><p>Good food. Open hearts.<br />A seat for you, always.</p><a className="social-link" href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={17} /> FOLLOW ALONG <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© 2026 SUNDAY TABLE · CONCEPT WEBSITE</span><span>MADE WITH CARE, SHARED WITH LOVE</span><a href="#top">BACK TO THE TOP ↑</a></div></footer>
    </div>
  );
}

export default App;