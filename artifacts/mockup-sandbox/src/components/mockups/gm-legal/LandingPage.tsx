import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Shield,
  Scale,
  BookOpen,
  FileText,
  Users,
  Clock,
  CheckCircle,
  Search,
  FileSignature,
  Landmark,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
} from "lucide-react";
import "./_group.css";

const colors = {
  primary: "#072A46",
  gold: "#CCB757",
  white: "#FFFFFF",
  light: "#F5F7FA",
};

// Intersection Observer Hook
function useIntersectionObserver(options = {}) {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, ...options },
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [elements, options]);

  return (el: Element | null) => {
    if (el && !elements.includes(el)) {
      setElements((prev) => [...prev, el]);
    }
  };
}

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observe = useIntersectionObserver();

  // VARIABLES DEL FORMULARIO

    const [nombre, setNombre] = useState("");
    const [entidad, setEntidad] = useState("");
    const [mensaje, setMensaje] = useState("");

    // FUNCIÓN DEL WHATSAPP

    const enviarWhatsApp = () => {
      const numeroEmpresa = "573112854346";

      const texto = `Hola, me gustaría solicitar una asesoría jurídica.

  Nombre: ${nombre}

  Entidad / Empresa: ${entidad}

  Consulta:

  ${mensaje}`;

      const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(
        texto,
      )}`;

      window.open(url, "_blank");
    };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-montserrat text-slate-800 bg-white min-h-screen">
      {/* 1. NAVBAR */}
      <nav className="fixed w-full z-50 transition-all duration-300 py-3 shadow-md text-background bg-[#072a46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center bg-[#072a46] text-background">
          <div className="flex items-center gap-3">
            <img
              src="/__mockup/images/gm-logo.png"
              alt="G&M Gestión Legal S.A.S."
              className="h-12 w-auto"
            />
            {!isScrolled && (
              <span className="font-cinzel font-bold text-xl hidden sm:block text-background">
                G&M Gestión Legal
              </span>
            )}
            {isScrolled && (
              <span className="font-cinzel font-bold text-xl hidden sm:block text-background">
                G&M Gestión Legal
              </span>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm font-semibold transition-colors hover:text-[#CCB757] text-background"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="hidden md:flex items-center gap-8 text-[#ffffff] font-semibold"
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-sm font-semibold transition-colors hover:text-[#CCB757] text-background"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-sm font-semibold transition-colors hover:text-[#CCB757] text-background"
            >
              Contacto
            </a>
            <a
              href="#contacto"
              className="bg-[#CCB757] text-[#072A46] px-6 py-2 rounded font-semibold text-sm hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5"
            >
              Solicitar Asesoría
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-[#072A46]" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 gap-4">
            <a
              href="#inicio"
              className="text-[#072A46] font-semibold py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-[#072A46] font-semibold py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#nosotros"
              className="text-[#072A46] font-semibold py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              className="text-[#072A46] font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <a
              href="#contacto"
              className="bg-[#CCB757] text-[#072A46] px-6 py-3 rounded text-center font-semibold mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicitar Asesoría
            </a>
          </div>
        )}
      </nav>
      {/* 2. HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-20"
        style={{
          background: 'linear-gradient(rgba(7,42,70,0.82),rgba(7,42,70,0.82)), url("/__mockup/images/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-cinzel font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-slide-up">
            Cumplimiento Legal
            <br />
            Gestión Documental
            <br />
            <span className="text-[#CCB757]">Tranquilidad institucional</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-slide-up delay-100 leading-relaxed font-light">
            Asesoría jurídica y gestión documental especializada para entidades públicas y privadas, así como para cuerpos de bomberos de Colombia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-200">
            <a
              href="#contacto"
              className="bg-[#CCB757] text-[#072A46] px-8 py-4 rounded font-bold text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Solicitar Asesoría
            </a>
            <a
              href="#servicios"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-[#072A46] transition-all transform hover:-translate-y-1"
            >
              Conocer Servicios
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8 opacity-70" />
        </div>
      </section>
      {/* 3. QUIÉNES SOMOS */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div ref={observe} className="intersect-observe">
              <h2 className="font-cinzel text-sm font-bold text-[#CCB757] uppercase tracking-wider mb-2">
                Nosotros
              </h2>
              <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#072A46] mb-6">
                Expertos en Fortalecimiento Institucional
              </h3>

              <p className="mb-8 leading-relaxed text-foreground">
                Nuestra labor se rige por principios inquebrantables de{" "}
                <strong>legalidad, eficiencia, transparencia y control</strong>,
                garantizando que su institución cumpla con la normativa vigente
                y optimice sus procesos internos.
              </p>

              <div className="bg-[#F5F7FA] p-6 rounded-lg border-l-4 border-[#CCB757] mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#072A46] p-3 rounded-full text-[#CCB757] shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-cinzel font-bold text-[#072A46] text-lg mb-2">
                      Julio César García Triana
                    </h4>
                    <p className="text-sm text-gray-500 font-semibold mb-2">
                      Fundador y Director General
                    </p>
                    <p className="text-sm text-foreground">
                      Abogado Especialista en Derecho Administrativo con extensa
                      trayectoria institucional, docente y experiencia directa
                      en el sector público y bomberil.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={observe} className="intersect-observe delay-200 relative">
              <div className="absolute inset-0 bg-[#CCB757] rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src="/__mockup/images/about-img.png"
                alt="Gobierno de Colombia"
                className="relative z-10 w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div
              ref={observe}
              className="intersect-observe bg-[#072A46] p-8 rounded-lg text-white shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="w-32 h-32" />
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-[#CCB757] mb-4 relative z-10">
                Misión
              </h4>
              <p className="relative z-10 text-gray-300 leading-relaxed">
                Proporcionar asesoría jurídica especializada y soluciones
                integrales en gestión documental que fortalezcan la
                institucionalidad de nuestros clientes, garantizando el
                cumplimiento normativo y la eficiencia administrativa con los
                más altos estándares de calidad y ética.
              </p>
            </div>
            <div
              ref={observe}
              className="intersect-observe delay-200 bg-white p-8 rounded-lg shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <Search className="w-32 h-32" />
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-[#072A46] mb-4 relative z-10">
                Visión
              </h4>
              <p className="relative z-10 leading-relaxed text-foreground">
                Ser reconocidos a nivel nacional como la firma líder y aliada
                estratégica por excelencia para el sector público, privado y cuerpos de
                bomberos, destacando por nuestro compromiso con la
                transparencia, la innovación en la gestión y el fortalecimiento
                del marco institucional en Colombia.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 4. POR QUÉ ELEGIRNOS */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={observe} className="intersect-observe text-center mb-16">
            <h2 className="font-cinzel text-sm font-bold text-[#CCB757] uppercase tracking-wider mb-2">
              Nuestra Ventaja
            </h2>
            <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#072A46]">
              Por Qué Elegir G&M Gestión Legal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Experiencia en Inspección",
                desc: "Experiencia directa en inspección, vigilancia y control bomberil.",
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Conocimiento Normativo",
                desc: "Conocimiento práctico y actualizado del marco normativo y administrativo.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Acompañamiento Cercano",
                desc: "Asesoría jurídica especializada, personalizada y de proximidad institucional.",
              },
              {
                icon: <Landmark className="w-8 h-8" />,
                title: "Liderazgo Docente",
                desc: "Liderazgo docente y firme compromiso con el fortalecimiento normativo bomberil.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                ref={observe}
                className="intersect-observe delay-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent hover:border-[#CCB757] is-visible bg-[#1d293d] text-background"
              >
                <div className="text-[#CCB757] mb-6 bg-[#F5F7FA] w-16 h-16 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-cinzel font-bold text-xl mb-3 text-background">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-background">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. SERVICIOS */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={observe} className="intersect-observe text-center mb-16">
            <h2 className="font-cinzel text-sm font-bold text-[#CCB757] uppercase tracking-wider mb-2">
              Especialidades
            </h2>
            <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#072A46]">
              Nuestros Servicios
            </h3>
          </div>

          <div className="mb-20">
            <div
              ref={observe}
              className="intersect-observe flex items-center gap-4 mb-10 pb-4 border-b-2 border-gray-100"
            >
              <FileText className="w-10 h-10 text-[#CCB757]" />
              <h4 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#072A46]">
                Gestión Documental
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Organización Documental",
                  desc: "Clasificación, ordenamiento y preservación técnica de fondos documentales acumulados.",
                  items: [
                    "Tablas de Retención Documental",
                    "Clasificación de expedientes",
                    "Preservación a largo plazo",
                  ],
                },
                {
                  title: "Consultoría Archivística",
                  desc: "Servicio especializado de consultoría archivística para la gestión documental.",
                  items: [
                    "Capacitación",
                    "Asesoría",
                    "Asistencia Técnica",
                  ],
                },
                {
                  title: "Asesoría Normativa",
                  desc: "Desarrollo de Programas de Gestión Documental (PGD) y cumplimiento de lineamientos del AGN.",
                  items: [
                    "Elaboración de PGD",
                    "Alineación con el Archivo General",
                    "Auditorías de cumplimiento",
                  ],
                },
                {
                  title: "Apoyo Administrativo",
                  desc: "Soporte integral en la gestión diaria del archivo y flujos de información institucional.",
                  items: [
                    "Personal capacitado",
                    "Optimización de flujos de trabajo",
                    "Control de correspondencia",
                  ],
                },
              ].map((svc, idx) => (
                <div
                  key={idx}
                  ref={observe}
                  className={`intersect-observe delay-${(idx % 2) * 100} bg-[#F5F7FA] p-8 rounded-xl border border-gray-200 hover:border-[#CCB757] transition-colors`}
                >
                  <h5 className="font-cinzel font-bold text-[#072A46] text-xl mb-3">
                    {svc.title}
                  </h5>
                  <p className="mb-6 text-sm text-foreground">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-[#CCB757] shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              ref={observe}
              className="intersect-observe flex items-center gap-4 mb-10 pb-4 border-b-2 border-gray-100"
            >
              <Scale className="w-10 h-10 text-[#CCB757]" />
              <h4 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#072A46]">
                Asesoría Jurídica Especializada
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Asesoría Jurídica",
                  desc: "Consultoría experta en derecho administrativo y cumplimiento normativo para entidades públicas.",
                  items: [
                    "Conceptos jurídicos",
                    "Revisión de actos administrativos",
                    "Contratación estatal",
                  ],
                },
                {
                  title: "Capacitación y Formación",
                  desc: "Programas de actualización y formación legal para funcionarios institucionales.",
                  items: [
                    "Seminarios normativos",
                    "Talleres de gestión pública",
                    "Actualización jurisprudencial",
                  ],
                },
                {
                  title: "Representación y Defensa",
                  desc: "Representación legal técnica en procesos administrativos y sancionatorios.",
                  items: [
                    "Defensa disciplinaria",
                    "Contencioso administrativo",
                    "Atención de requerimientos",
                  ],
                },
                {
                  title: "Asesorí Legal Bomberil",
                  desc: "Asesorías especializadas para garantizar la conformidad operativa de Cuerpos de Bomberos.",
                  items: [
                    "Revisión de estatutos",
                    "Control de cumplimiento",
                    "Diagnóstico institucional",
                  ],
                },
              ].map((svc, idx) => (
                <div
                  key={idx}
                  ref={observe}
                  className={`intersect-observe delay-${(idx % 2) * 100} bg-[#F5F7FA] p-8 rounded-xl border border-gray-200 hover:border-[#CCB757] transition-colors`}
                >
                  <h5 className="font-cinzel font-bold text-[#072A46] text-xl mb-3">
                    {svc.title}
                  </h5>
                  <p className="mb-6 text-sm text-foreground">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-[#CCB757] shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 6. MODALIDAD DEL SERVICIO */}
      <section className="py-16 bg-[#072A46] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              ref={observe}
              className="intersect-observe bg-white bg-opacity-5 p-8 rounded-xl border border-white border-opacity-10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#CCB757] p-3 rounded-full text-[#072A46]">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h4 className="font-cinzel text-2xl font-bold text-[#CCB757]">
                  Servicio Integral
                </h4>
              </div>
              <p className="leading-relaxed text-foreground">
                Gestión completa desde el diagnóstico inicial hasta la entrega
                final y seguimiento, asumiendo la responsabilidad total de su
                proyecto documental o jurídico.
              </p>
            </div>
            <div
              ref={observe}
              className="intersect-observe delay-200 bg-white bg-opacity-5 p-8 rounded-xl border border-white border-opacity-10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#CCB757] p-3 rounded-full text-[#072A46]">
                  <FileSignature className="w-6 h-6" />
                </div>
                <h4 className="font-cinzel text-2xl font-bold text-[#CCB757]">
                  Por Módulos Específicos
                </h4>
              </div>
              <p className="leading-relaxed text-foreground">
                Contratación focalizada en necesidades particulares de su
                institución, permitiendo abordar áreas críticas con precisión
                quirúrgica y presupuesto optimizado.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 7. BENEFICIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={observe} className="intersect-observe text-center mb-16">
            <h2 className="font-cinzel text-sm font-bold text-[#CCB757] uppercase tracking-wider mb-2">
              Valor Agregado
            </h2>
            <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#072A46]">
              Beneficios para su Institución
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cumplimiento normativo estricto",
              "Acceso rápido y estructurado a la información",
              "Optimización de espacios del archivo físico",
              "Mejora sustancial de procesos administrativos",
              "Soporte documental para auditorías",
              "Seguridad y confidencialidad garantizada",
            ].map((benefit, idx) => (
              <div
                key={idx}
                ref={observe}
                className={`intersect-observe delay-${(idx % 3) * 100} flex items-center gap-4 p-6 bg-[#F5F7FA] rounded-lg`}
              >
                <CheckCircle className="w-6 h-6 text-[#CCB757] shrink-0" />
                <span className="font-semibold text-[#072A46]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. CÓMO TRABAJAMOS (Timeline) */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={observe} className="intersect-observe text-center mb-20">
            <h2 className="font-cinzel text-sm font-bold text-[#CCB757] uppercase tracking-wider mb-2">
              Proceso
            </h2>
            <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#072A46]">
              Cómo Trabajamos
            </h3>
          </div>

          <div className="relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                {
                  step: "1",
                  title: "Diagnóstico Inicial",
                  desc: "Evaluación profunda del estado actual documental o jurídico de la entidad.",
                },
                {
                  step: "2",
                  title: "Plan de Trabajo",
                  desc: "Diseño de un plan de acción personalizado, cronograma y metas claras.",
                },
                {
                  step: "3",
                  title: "Ejecución Controlada",
                  desc: "Implementación rigurosa con reportes periódicos de avance y control de calidad.",
                },
                {
                  step: "4",
                  title: "Entrega y Seguimiento",
                  desc: "Entrega formal de resultados y acompañamiento posterior para garantizar la sostenibilidad.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  ref={observe}
                  className={`intersect-observe delay-${idx * 100} relative text-center`}
                >
                  <div className="w-16 h-16 mx-auto bg-[#072A46] rounded-full flex items-center justify-center border-4 border-white shadow-md relative z-10 mb-6">
                    <span className="font-cinzel text-2xl font-bold text-[#CCB757]">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-cinzel font-bold text-[#072A46] text-xl mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 9. NUESTRO COMPROMISO */}
      <section
        className="py-24 bg-[#072A46] text-white bg-opacity-95"
        style={{
          backgroundImage: 'url("/__mockup/images/hero-bg.png")',
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-[#CCB757] mx-auto mb-8 animate-pulse" />
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
            Nuestro Compromiso
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#CCB757] shrink-0 mt-1" />
              <p className="text-lg font-light">
                Manejo estrictamente ético y absoluta confidencialidad de la
                información institucional.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#CCB757] shrink-0 mt-1" />
              <p className="text-lg font-light">
                Trabajo caracterizado por la máxima responsabilidad, rigor y
                profesionalismo.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#CCB757] shrink-0 mt-1" />
              <p className="text-lg font-light">
                Atención directa, personalizada y cercana a las realidades de
                cada entidad.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#CCB757] shrink-0 mt-1" />
              <p className="text-lg font-light">
                Cumplimiento inquebrantable de los tiempos y alcances acordados
                contractualmente.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 10. A QUIÉN ACOMPAÑAMOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={observe} className="intersect-observe text-center mb-16">
            <h2 className="font-cinzel text-sm font-bold text-[#CCB757] uppercase tracking-wider mb-2">
              Clientes
            </h2>
            <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#072A46]">
              A Quién Acompañamos
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cuerpos de Bomberos Voluntarios",
                img: "/__mockup/images/bomberos.png",
              },
              {
                title: "Alcaldías y Entidades Municipales",
                img: "/__mockup/images/about-img.png",
              },
              {
                title: "Entidades del SNGRD",
                img: "https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                title: "Entidades Públicas y Privadas",
                img: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
            ].map((client, idx) => (
              <div
                key={idx}
                ref={observe}
                className={`intersect-observe delay-${idx * 100} relative overflow-hidden rounded-xl shadow-md h-64 group`}
              >
                {client.img ? (
                  <>
                    <img
                      src={client.img}
                      alt={client.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#072A46] to-transparent opacity-90"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[#F5F7FA] flex items-center justify-center pb-8 group-hover:bg-[#CCB757] group-hover:bg-opacity-10 transition-colors duration-500">
                    {client.icon}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h4
                    className={`font-cinzel font-bold text-lg leading-tight ${client.img ? "text-white" : "text-[#072A46]"}`}
                  >
                    {client.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 11. CTA */}
      <section className="py-20 bg-[#CCB757]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#072A46] mb-6">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-xl text-[#072A46] mb-10 opacity-90 font-medium">
            Inicie el camino hacia la profesionalización jurídica y el
            fortalecimiento institucional integral.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-[#072A46] text-white px-10 py-4 rounded font-bold text-lg hover:bg-opacity-90 shadow-lg transition-all transform hover:-translate-y-1"
          >
            Contáctenos hoy
          </a>
        </div>
      </section>
      {/* 12. CONTACTO */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={observe} className="intersect-observe text-center mb-16">
            <h2 className="font-cinzel text-sm font-bold text-[#CCB757] uppercase tracking-wider mb-2">
              Contacto
            </h2>
            <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#072A46]">
              Hablemos de su Institución
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div
              ref={observe}
              className="intersect-observe bg-[#F5F7FA] p-10 rounded-xl"
            >
              <h4 className="font-cinzel text-2xl font-bold text-[#072A46] mb-8">
                Información de Contacto
              </h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-[#CCB757]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1">
                      Teléfonos
                    </p>
                    <p className="text-[#072A46] font-medium">311 285 4346</p>
                    <p className="text-[#072A46] font-medium">311 217 7006</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-[#CCB757]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold mb-1">
                      Correo Electrónico
                    </p>
                    <p className="text-[#072A46] font-medium">
                      gmgestionlegalco@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-[#CCB757]">
                   
              
                      
                  </div>
                </div>
              </div>
            </div>

      <div ref={observe} className="intersect-observe delay-200">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            enviarWhatsApp();
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#CCB757] focus:ring-2 focus:ring-[#CCB757] focus:ring-opacity-50 outline-none transition-all"
                placeholder="Su nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Entidad / Institución
              </label>
              <input
                type="text"
                value={entidad}
                onChange={(e) => setEntidad(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#CCB757] focus:ring-2 focus:ring-[#CCB757] focus:ring-opacity-50 outline-none transition-all"
                placeholder="Nombre de la entidad"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje
            </label>
            <textarea
              rows={4}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#CCB757] focus:ring-2 focus:ring-[#CCB757] focus:ring-opacity-50 outline-none transition-all resize-none"
              placeholder="Cuéntenos brevemente cómo podemos ayudarle"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#CCB757] text-[#072A46] font-bold py-4 rounded-md hover:bg-opacity-90 transition-colors shadow-md text-lg"
          >
            Contactar por WhatsApp
          </button>
        </form>
      </div>
      </div>
      </div>
      </section>
      {/* 13. FOOTER */}
      <footer className="bg-[#072A46] text-white pt-16 pb-8 border-t-4 border-[#CCB757]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://res.cloudinary.com/djccaiypy/image/upload/v1781148698/LOGO_SIN_FONDO_dz0qrh.png"
                  alt="G&M Logo"
                  className="h-30 w-auto filter brightness-0 invert"
                />
                <span className="font-cinzel font-bold text-xl">
                  G&M Gestión Legal
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Asesoría jurídica y gestión documental especializada para el
                fortalecimiento de entidades públicas y cuerpos de bomberos en
                Colombia.
              </p>
            </div>

            <div>
              <h4 className="font-cinzel font-bold text-[#CCB757] text-lg mb-6">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#inicio"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Nuestros Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-cinzel font-bold text-[#CCB757] text-lg mb-6">
                Contacto
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Phone className="w-5 h-5 text-[#CCB757] shrink-0" />
                  <span>
                    311 285 4346 <br /> 311 217 7006
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <Mail className="w-5 h-5 text-[#CCB757] shrink-0" />
                  <span>gmgestionlegalco@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white border-opacity-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>
              © 2026 G&M Gestión Legal S.A.S. Todos los derechos reservados.
            </p>
            <p>Diseño Institucional Especializado</p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp CTA */}
      <a
        href="#contacto"
        className="fixed bottom-6 right-6 bg-[#CCB757] text-[#072A46] p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircleIcon className="w-8 h-8" />
      </a>
    </div>
  );
}

// Minimal icon for WhatsApp CTA since Lucide doesn't have a direct whatsapp icon by default,
// MessageCircle is a good substitute
function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
