import advisory from "./service_corporate.jpg";
import boardroom from "./service_legal_tax.jpg";
import archCorporate from "./hero_architecture.jpg";
import archGeometric from "./service_tax.jpg";
import interior from "./firm_interior.jpg";
import partner1 from "./partner_1.jpg";
import partner2 from "./partner_2.jpg";
import partner3 from "./partner_3.jpg";
import ecuadorDanny from "./pexels-danny-lema-1014534-18276589.jpg";
import ecuadorDave from "./pexels-davegarcia-30785364.jpg";
import ecuadorShad from "./pexels-shad-meeg-1134853-10824057.jpg";

export const images = {
  hero_architecture: archCorporate,
  firm_interior: interior,
  service_tax: archGeometric,
  service_legal_tax: boardroom,
  service_corporate: advisory,
  partner_1: partner1,
  partner_2: partner2,
  partner_3: partner3,
  hero_la_firma: ecuadorDave,
  hero_servicios: ecuadorDanny,
  hero_profesionales: ecuadorShad,
} as const;

export type ImageName = keyof typeof images;
