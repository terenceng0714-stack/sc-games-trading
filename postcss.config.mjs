export const phoneNumber = "60127713518";

export const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  "Hi SC Games, I would like to consult a technician about a console repair."
)}`;

export const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#specializations", label: "Our Specializations" },
  { href: "/#pricing", label: "Pricing & Services" },
  { href: "/#location", label: "Location & Hours" }
];

export const benefits = [
  {
    icon: "LAB",
    title: "Thermal diagnostics",
    copy: "We use structured fault isolation, heat signatures, and meter readings before recommending major parts replacement."
  },
  {
    icon: "IC",
    title: "Component-level repair",
    copy: "Instead of replacing a whole board by default, we target the exact failed IC, capacitor, connector, or data line."
  },
  {
    icon: "JB",
    title: "Holiday Plaza specialist",
    copy: "Drop off your console at LG 91, Lower Ground Level, Holiday Plaza, Johor Bahru."
  }
];

export const services = [
  {
    platform: "Motherboards",
    title: "Board-Level Micro-Soldering",
    description:
      "Component-level motherboard diagnostics with thermal imaging short-circuit detection and precise surface-mount chip replacement.",
    common:
      "Nintendo Switch power management IC replacement, burned USB-C ports, dead charging chips, no-power faults."
  },
  {
    platform: "Controllers",
    title: "Controller Precision Restorations",
    description:
      "Full de-soldering and extraction of worn analog stick potentiometers, replaced with high-grade durable components.",
    common:
      "Permanent drift repair for PS5 DualSense, Xbox Elite, and Joy-Cons. Tactile button and trigger spring refurbishment."
  },
  {
    platform: "Storage",
    title: "Flash Memory & Storage Reconstruction",
    description:
      "Advanced chip-off procedures, data line tracing, and structural re-programming of corrupted storage modules.",
    common:
      "Bricked console recovery, boot-looping systems, corrupted NAND/eMMC, and storage hardware degradation."
  },
  {
    platform: "Firmware",
    title: "Custom Software & Firmware Optimization",
    description:
      "Clean directory file setups, safer custom firmware environments, and complete system testing for enthusiast devices.",
    common:
      "System jailbreaking support, local game backup management, homebrew setups, and emulator configuration."
  }
];

export const pricing = [
  { name: "Controller drift restoration", range: "From RM 60" },
  { name: "USB-C / HDMI port micro-soldering", range: "From RM 180" },
  { name: "Motherboard diagnostics", range: "Quote after inspection" },
  { name: "eMMC / NAND recovery assessment", range: "Specialist quote" }
];

export const address =
  "LG 91, Lower Ground Level, Holiday Plaza, Jalan Dato Sulaiman, Taman Kebun Teh, 80250 Johor Bahru, Johor, Malaysia.";
