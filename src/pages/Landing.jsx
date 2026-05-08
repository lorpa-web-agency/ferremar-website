import React, { useState } from "react";
import axios from "axios";
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Truck,
  Store,
  CreditCard,
  Wifi,
  ShieldCheck,
  Star,
  Send,
  Hammer,
  ChevronRight,
  Wrench,
  Menu,
  X,
} from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PHONE = "04120929193";
const PHONE_INTL = "+584120929193";
const WHATSAPP_URL = `https://wa.me/584120929193?text=${encodeURIComponent(
  "Hola FERREMAR, me gustaría hacer una consulta."
)}`;
const ADDRESS = "CASA B4, Av Aldonza Manrique, Pampatar 6316, Nueva Esparta";
const PLUS_CODE = "X5RJ+25 Pampatar, Nueva Esparta";
const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("X5RJ+25 Pampatar, Nueva Esparta") +
  "&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("X5RJ+25 Pampatar, Nueva Esparta");

const GALLERY = [
  "https://customer-assets.emergentagent.com/job_d5c14d24-9e32-41a9-bfc3-8114a0d2c591/artifacts/b3fos347_01.jpg",
  "https://customer-assets.emergentagent.com/job_d5c14d24-9e32-41a9-bfc3-8114a0d2c591/artifacts/dgjf2207_02.jpg",
  "https://customer-assets.emergentagent.com/job_d5c14d24-9e32-41a9-bfc3-8114a0d2c591/artifacts/t3z88cxe_03.jpg",
  "https://customer-assets.emergentagent.com/job_d5c14d24-9e32-41a9-bfc3-8114a0d2c591/artifacts/3ehkt33g_04.jpg",
  "https://customer-assets.emergentagent.com/job_d5c14d24-9e32-41a9-bfc3-8114a0d2c591/artifacts/82srujfz_06.jpg",
];

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

// ---------- Header ----------
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/60"
      data-testid="site-header"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2" data-testid="header-logo">
          <span className="w-8 h-8 bg-yellow-400 flex items-center justify-center">
            <Hammer className="w-4 h-4 text-zinc-950" strokeWidth={3} />
          </span>
          <span className="font-display font-black text-2xl tracking-tight text-zinc-50">
            FERRE<span className="text-yellow-400">MAR</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors uppercase tracking-wider"
              data-testid={`nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE_INTL}`}
          className="hidden md:inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-zinc-950 font-bold px-5 py-2.5 transition-all hover:-translate-y-0.5 text-sm uppercase tracking-wider"
          data-testid="header-call-cta"
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          Llamar ahora
        </a>
        <button
          className="md:hidden p-2 text-zinc-50"
          onClick={() => setOpen(!open)}
          data-testid="mobile-menu-toggle"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-yellow-400 uppercase tracking-wider"
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_INTL}`}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-zinc-950 font-bold px-5 py-3 text-sm uppercase tracking-wider"
              data-testid="mobile-call-cta"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Llamar: {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// ---------- Hero ----------
const Hero = () => (
  <section
    id="inicio"
    className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
    data-testid="hero-section"
  >
    {/* Background layers */}
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1770351978852-43d97c436b4f?crop=entropy&cs=srgb&fm=jpg&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/85 to-zinc-950" />
    </div>

    {/* Hazard stripe accent */}
    <div className="absolute top-16 left-0 right-0 h-2 hazard-stripes opacity-90" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8 fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-800 bg-zinc-900/60 mb-8">
            <span className="w-2 h-2 bg-yellow-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
              Pampatar · Nueva Esparta
            </span>
          </div>

          <h1
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-zinc-50 uppercase"
            data-testid="hero-headline"
          >
            Tu aliado en
            <br />
            <span className="text-yellow-400">construcción</span>
            <br />
            y ferretería.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            Herramientas, materiales e insumos para profesionales y para tu hogar. Atención cercana,
            entrega a domicilio y todos los métodos de pago.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-zinc-950 font-bold px-7 py-4 transition-all hover:-translate-y-0.5 uppercase tracking-wider text-sm"
              data-testid="hero-whatsapp-button"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
              Escribir al WhatsApp
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PHONE_INTL}`}
              className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-50 font-bold px-7 py-4 border border-zinc-800 hover:border-yellow-400 transition-all hover:-translate-y-0.5 uppercase tracking-wider text-sm"
              data-testid="hero-call-button"
            >
              <Phone className="w-5 h-5 text-yellow-400" strokeWidth={2.5} />
              {PHONE}
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 fade-up delay-2">
          <div className="bg-zinc-900 border border-zinc-800 p-8 relative">
            <div className="absolute -top-3 left-8 bg-yellow-400 text-zinc-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
              Reseñas Google
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="font-display font-black text-7xl text-zinc-50 leading-none"
                data-testid="rating-value"
              >
                4.6
              </span>
              <span className="text-zinc-500 text-xl">/ 5.0</span>
            </div>
            <div className="flex items-center gap-1 mt-3" data-testid="rating-stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i <= 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400/40 text-yellow-400/40"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              Cientos de clientes confían en FERREMAR cada mes por su atención profesional y la
              calidad de sus productos.
            </p>
          </div>
        </div>
      </div>

      {/* Quick stat strip */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-zinc-800 fade-up delay-3">
        {[
          { k: "Lun – Vie", v: "7:30 – 18:00" },
          { k: "Sábado", v: "8:00 – 14:00" },
          { k: "Servicios", v: "Delivery · Pickup" },
          { k: "Pagos", v: "NFC · Tarjetas" },
        ].map((s, i) => (
          <div
            key={i}
            className="py-6 px-4 border-r last:border-r-0 border-zinc-800 [&:nth-child(2)]:border-r md:[&:nth-child(2)]:border-r"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-medium">
              {s.k}
            </p>
            <p className="mt-2 font-display font-bold text-xl text-zinc-50">{s.v}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Bento Info Grid ----------
const InfoCard = ({ icon: Icon, title, items, accent = "yellow", testid }) => (
  <div
    className="group relative bg-zinc-900 border border-zinc-800 p-8 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(250,204,21,0.06)]"
    data-testid={testid}
  >
    <div
      className={`w-12 h-12 flex items-center justify-center mb-6 ${
        accent === "yellow" ? "bg-yellow-400 text-zinc-950" : "bg-blue-600 text-white"
      }`}
    >
      <Icon className="w-6 h-6" strokeWidth={2.5} />
    </div>
    <h3 className="font-display font-bold text-2xl text-zinc-50 uppercase tracking-tight">
      {title}
    </h3>
    <ul className="mt-4 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2 text-zinc-400">
          <span
            className={`mt-2 w-1 h-1 ${
              accent === "yellow" ? "bg-yellow-400" : "bg-blue-500"
            } shrink-0`}
          />
          <span className="text-base">{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Servicios = () => (
  <section id="servicios" className="py-24 sm:py-32 bg-zinc-950 relative" data-testid="servicios-section">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-bold mb-4">
            // Información esencial
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-50 uppercase leading-[0.95]">
            Todo lo que necesitas <br className="hidden md:block" />
            <span className="text-zinc-500">en un solo lugar.</span>
          </h2>
        </div>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-50 hover:text-yellow-400 transition-colors"
          data-testid="servicios-contact-link"
        >
          Contáctanos <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoCard
          icon={Clock}
          title="Horario"
          items={[
            "Lun – Vie: 7:30 AM – 6:00 PM",
            "Sábado: 8:00 AM – 2:00 PM",
            "Domingo: Cerrado",
          ]}
          accent="yellow"
          testid="card-horario"
        />
        <InfoCard
          icon={Truck}
          title="Servicio"
          items={["Entrega a domicilio", "Retiro en tienda", "Compras en tienda"]}
          accent="blue"
          testid="card-servicio"
        />
        <InfoCard
          icon={CreditCard}
          title="Pagos"
          items={["Pago Móvil con NFC", "Tarjetas de crédito", "Tarjetas de débito"]}
          accent="yellow"
          testid="card-pagos"
        />
        <InfoCard
          icon={Wifi}
          title="Tienda"
          items={["Wi-Fi gratis", "Sanitarios unisex", "Atención profesional"]}
          accent="blue"
          testid="card-tienda"
        />
      </div>

      {/* Highlight strip */}
      <div className="mt-16 border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-900/40 p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 hazard-stripes shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">
              Más que una ferretería
            </p>
            <p className="font-display font-bold text-2xl text-zinc-50 mt-1">
              Asesoría experta para tu obra y tu hogar.
            </p>
          </div>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-zinc-950 font-bold px-6 py-3 uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
          data-testid="servicios-whatsapp-cta"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
          Pedir asesoría
        </a>
      </div>
    </div>
  </section>
);

// ---------- Gallery ----------
const Gallery = () => (
  <section id="galeria" className="py-24 sm:py-32 bg-zinc-900/40 border-y border-zinc-800" data-testid="galeria-section">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-bold mb-4">
          // Galería
        </p>
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-50 uppercase leading-[0.95]">
          Nuestras instalaciones.
        </h2>
        <p className="mt-6 text-zinc-400 max-w-2xl text-lg">
          Pasea virtualmente por nuestro local: amplio inventario, marcas reconocidas y un equipo
          listo para atenderte.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[520px] sm:h-[640px]">
        <a
          href={GALLERY[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 row-span-2 group relative overflow-hidden border border-zinc-800"
          data-testid="gallery-image-1"
        >
          <img
            src={GALLERY[0]}
            alt="Interior FERREMAR 1"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/0 to-zinc-950/0" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-400 font-bold">
              Vista 01
            </p>
            <p className="font-display font-bold text-2xl text-zinc-50 mt-1">
              Pasillo principal
            </p>
          </div>
        </a>

        {GALLERY.slice(1).map((src, idx) => (
          <a
            key={idx}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-zinc-800"
            data-testid={`gallery-image-${idx + 2}`}
          >
            <img
              src={src}
              alt={`Interior FERREMAR ${idx + 2}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/30 transition-colors" />
            <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-zinc-950/80 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-400 font-bold">
                0{idx + 2}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Location & Contact ----------
const ContactForm = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim() || !form.mensaje.trim()) {
      toast.error("Por favor completa todos los campos.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      setForm({ nombre: "", telefono: "", mensaje: "" });
    } catch (err) {
      toast.error("No se pudo enviar el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
      <div>
        <label className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold block mb-2">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={onChange}
          required
          maxLength={120}
          placeholder="Tu nombre completo"
          className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-zinc-50 placeholder:text-zinc-600 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
          data-testid="contact-input-nombre"
        />
      </div>
      <div>
        <label className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold block mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={onChange}
          required
          maxLength={40}
          placeholder="0412-0000000"
          className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-zinc-50 placeholder:text-zinc-600 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
          data-testid="contact-input-telefono"
        />
      </div>
      <div>
        <label className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold block mb-2">
          Mensaje
        </label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={onChange}
          required
          rows={5}
          maxLength={2000}
          placeholder="¿En qué podemos ayudarte?"
          className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-zinc-50 placeholder:text-zinc-600 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors resize-none"
          data-testid="contact-input-mensaje"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-bold py-4 uppercase tracking-wider text-sm transition-all hover:-translate-y-0.5"
        data-testid="contact-form-submit"
      >
        <Send className="w-4 h-4" strokeWidth={2.5} />
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
      <p className="text-xs text-zinc-500 leading-relaxed">
        Al enviar, aceptas que te contactemos por teléfono o WhatsApp para responder a tu consulta.
      </p>
    </form>
  );
};

const LocationContact = () => (
  <section id="ubicacion" className="py-24 sm:py-32 bg-zinc-950" data-testid="ubicacion-section">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-bold mb-4">
          // Ubícanos · Escríbenos
        </p>
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-50 uppercase leading-[0.95]">
          Estamos cerca de ti.
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Map */}
        <div className="lg:col-span-7 border border-zinc-800 bg-zinc-900 overflow-hidden">
          <div className="aspect-[16/11] sm:aspect-[16/10] w-full">
            <iframe
              title="Ubicación FERREMAR"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full map-dark"
              data-testid="location-map"
            />
          </div>
          <div className="p-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 mt-1 shrink-0" strokeWidth={2.5} />
              <div>
                <p className="text-zinc-50 font-bold">{ADDRESS}</p>
                <p className="text-sm text-zinc-500 mt-1">Plus Code: {PLUS_CODE}</p>
              </div>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 uppercase tracking-wider text-xs transition-all hover:-translate-y-0.5 shrink-0"
              data-testid="location-directions-button"
            >
              Cómo llegar <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-5" id="contacto" data-testid="contact-section">
          <div className="border border-zinc-800 bg-zinc-900 p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 bg-yellow-400 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-zinc-950" strokeWidth={3} />
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">
                Cuéntanos tu proyecto
              </p>
            </div>
            <h3 className="font-display font-black text-3xl text-zinc-50 uppercase leading-tight mb-6">
              Envíanos un mensaje.
            </h3>
            <ContactForm />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-zinc-950 font-bold py-4 uppercase tracking-wider text-xs transition-all hover:-translate-y-0.5"
              data-testid="contact-whatsapp-button"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2.5} /> WhatsApp
            </a>
            <a
              href={`tel:${PHONE_INTL}`}
              className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-yellow-400 text-zinc-50 font-bold py-4 uppercase tracking-wider text-xs transition-all hover:-translate-y-0.5"
              data-testid="contact-call-button"
            >
              <Phone className="w-4 h-4 text-yellow-400" strokeWidth={2.5} /> Llamar
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Footer ----------
const Footer = () => (
  <footer className="bg-zinc-950 border-t border-zinc-900" data-testid="site-footer">
    <div className="hazard-stripes h-2 opacity-90" />
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 bg-yellow-400 flex items-center justify-center">
              <Hammer className="w-4 h-4 text-zinc-950" strokeWidth={3} />
            </span>
            <span className="font-display font-black text-2xl text-zinc-50">
              FERRE<span className="text-yellow-400">MAR</span>
            </span>
          </div>
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            Ferretería de confianza en Pampatar. Herramientas, materiales y asesoría experta para tu
            obra o tu hogar.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-yellow-400" />
            Calificación 4.6 / 5 en Google
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
            Contacto
          </p>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-yellow-400 mt-1 shrink-0" />
              <a href={`tel:${PHONE_INTL}`} className="hover:text-yellow-400" data-testid="footer-phone">
                {PHONE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="w-4 h-4 text-yellow-400 mt-1 shrink-0" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
                data-testid="footer-whatsapp"
              >
                WhatsApp directo
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-yellow-400 mt-1 shrink-0" />
              <span className="text-sm leading-relaxed">{ADDRESS}</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
            Horario
          </p>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li className="flex justify-between border-b border-zinc-900 pb-2">
              <span>Lunes – Viernes</span>
              <span className="text-zinc-50 font-bold">7:30 – 18:00</span>
            </li>
            <li className="flex justify-between border-b border-zinc-900 pb-2">
              <span>Sábado</span>
              <span className="text-zinc-50 font-bold">8:00 – 14:00</span>
            </li>
            <li className="flex justify-between">
              <span>Domingo</span>
              <span className="text-zinc-500">Cerrado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} FERREMAR. Todos los derechos reservados.
        </p>
        <p className="text-xs text-zinc-600 flex items-center gap-2">
          <Store className="w-3.5 h-3.5" /> Pampatar · Nueva Esparta · Venezuela
        </p>
      </div>
    </div>
  </footer>
);

// ---------- Floating WhatsApp ----------
const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-24 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-1"
    data-testid="floating-whatsapp"
    aria-label="Escribir por WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-zinc-950" strokeWidth={2.5} />
  </a>
);

// ---------- Page ----------
export default function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50" data-testid="landing-page">
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Gallery />
        <LocationContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          style: {
            background: "#18181b",
            color: "#fafafa",
            border: "1px solid #27272a",
            borderRadius: 0,
          },
        }}
      />
    </div>
  );
}
