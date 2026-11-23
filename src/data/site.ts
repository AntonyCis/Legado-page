/**
 * Datos de contacto y navegación del sitio.
 * Los valores entre corchetes son provisionales: reemplazar con los datos
 * reales de la firma antes de publicar (ver fase 2 del plan).
 */

export const site = {
  name: "LEGADO CONSULTING LAW",
  wordmark: "LEGADO",
  wordmarkSub: "CONSULTING LAW",
  url: "https://legado.ec",
  locale: "es_EC",
  description:
    "Firma boutique ecuatoriana de consultoría legal, tributaria y corporativa. Asesoría estratégica con criterio, integridad y confianza.",
  // TODO(cliente): reemplazar por los datos reales.
  email: "correo@legado.ec",
  phone: "+593 XX XXX XXXX",
  phoneHref: "",
  address: "[Dirección de oficina], Ecuador",
  hours: "Lunes a Viernes, 08:30 – 17:30",
  linkedin: "",
} as const;

export const nav = [
  { label: "La Firma", href: "/la-firma" },
  { label: "Servicios", href: "/servicios" },
  { label: "Profesionales", href: "/profesionales" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const services = [
  {
    number: "01",
    title: "Impuestos",
    slug: "impuestos",
    summary:
      "Asesoría y planificación tributaria, cumplimiento de obligaciones fiscales y acompañamiento técnico ante la administración tributaria.",
  },
  {
    number: "02",
    title: "Legal Tributario",
    slug: "legal-tributario",
    summary:
      "Consultoría jurídica fiscal, interpretación normativa, patrocinio en controversias y recursos administrativos y judiciales.",
  },
  {
    number: "03",
    title: "Corporativo Legal",
    slug: "corporativo-legal",
    summary:
      "Constitución y estructuración societaria, gobierno corporativo, contratos estratégicos y acompañamiento legal continuo a empresas.",
  },
] as const;

export type NavItem = (typeof nav)[number];
export type Service = (typeof services)[number];
