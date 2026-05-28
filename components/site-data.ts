export const phoneNumber = "60127713518";

export const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  "Hi SC GAMES TRADING, I would like to get a repair quote for my gaming device."
)}`;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" }
];

export const benefits = [
  {
    icon: "24H",
    title: "Fast repair time",
    copy: "Quick diagnostics and practical turnaround estimates so you know what to expect before work begins."
  },
  {
    icon: "RM",
    title: "Affordable price",
    copy: "Fair, transparent repair guidance with estimated ranges and no pressure to repair if it is not worth it."
  },
  {
    icon: "OK",
    title: "Trusted service",
    copy: "Handled by a local repair shop that cares about honesty, careful workmanship and repeat customers."
  }
];

export const services = [
  {
    platform: "PlayStation",
    title: "PS4 / PS5 Repair",
    description:
      "Diagnostics and repair support for no power, overheating, HDMI display issues, storage faults, fan noise and software problems."
  },
  {
    platform: "Nintendo",
    title: "Nintendo Switch Repair",
    description:
      "Help with screen problems, battery replacement, charging port faults, Joy-Con drift, dock display issues and game card reading problems."
  },
  {
    platform: "Xbox",
    title: "Xbox Repair",
    description:
      "Repair checks for power faults, HDMI output, overheating, controller sync issues, storage problems and general console servicing."
  },
  {
    platform: "PC Handheld",
    title: "Steam Deck Repair",
    description:
      "Support for battery, buttons, screen, storage upgrades, thermal service and handheld troubleshooting."
  },
  {
    platform: "Gaming Handhelds",
    title: "ROG Ally / Handheld Repair",
    description:
      "Diagnostics for Windows gaming handhelds including joystick, display, battery, charging and performance-related faults."
  },
  {
    platform: "Controllers",
    title: "Controller Repair",
    description:
      "Joystick drift repair, button issues, trigger faults, battery problems and cleaning for popular console controllers."
  },
  {
    platform: "Ports",
    title: "HDMI / Charging Port Repair",
    description:
      "Careful inspection and repair for damaged HDMI, USB-C, charging and display output ports."
  },
  {
    platform: "Display",
    title: "Screen Replacement",
    description:
      "Screen replacement guidance for handheld consoles and portable gaming systems, subject to parts availability."
  },
  {
    platform: "Power",
    title: "Battery / Power Issues",
    description:
      "Battery replacement and power diagnosis for devices that drain quickly, will not charge, or shut down unexpectedly."
  }
];

export const pricing = [
  { name: "Controller drift repair", range: "RM 60 - RM 150" },
  { name: "HDMI port repair", range: "RM 180 - RM 380" },
  { name: "Battery replacement", range: "RM 120 - RM 350" },
  { name: "Screen replacement", range: "RM 250 - RM 700" }
];
