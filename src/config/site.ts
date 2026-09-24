/**
 * URL pública del sitio. Usa NEXT_PUBLIC_SITE_URL si está definida; si no, la URL de
 * producción que Vercel asigna automáticamente; y como último recurso un valor por defecto.
 * Tolera valores vacíos o sin "https://".
 */
function resolveSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    "www.amplextech.com";
  const withProtocol = raw.startsWith("http://") || raw.startsWith("https://") ? raw : `https://${raw}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return "https://www.amplextech.com";
  }
}

/**
 * Configuración central del sitio. Editá estos valores para personalizar
 * datos de contacto, redes sociales y metadatos sin tocar los componentes.
 */
export const siteConfig = {
  name: "AMPLEX TECH SOLUTIONS",
  shortName: "AMPLEX",
  slogan: "Tecnología que impulsa tu futuro.",
  description:
    "Desarrollo web, software a medida, automatización de procesos, integración de sistemas y consultoría tecnológica para empresas que quieren innovar y crecer.",
  url: resolveSiteUrl(),
  locale: "es_PY",
  keywords: [
    "desarrollo web",
    "software a medida",
    "soluciones informáticas",
    "automatización de procesos",
    "integración de sistemas",
    "consultoría tecnológica",
    "AMPLEX TECH SOLUTIONS",
  ],
  contact: {
    email: "contacto@amplextech.com",
    phone: "+595 985 542 379",
    // Número en formato internacional sin "+", espacios ni guiones.
    whatsapp: "595985542379",
    whatsappMessage: "Hola AMPLEX, quiero consultar por un proyecto.",
    location: "Paraguay",
    hours: "Lun a Vie · 9:00 a 18:00",
  },
  // Dejá una URL vacía ("") para ocultar la red correspondiente.
  social: {
    linkedin: "https://www.linkedin.com/company/amplex-tech-solutions",
    github: "https://github.com/amplex-tech",
    instagram: "https://www.instagram.com/amplextech",
    x: "",
    facebook: "",
  },
} as const;

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "proceso", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
] as const;

export function whatsappUrl(message: string = siteConfig.contact.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
