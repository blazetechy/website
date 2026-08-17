export type Service = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "it-infrastructure-networking",
    title: "IT Infrastructure & Networking",
    summary:
      "Reliable, scalable network foundations for offices of any size.",
    bullets: [
      "Network design & installation",
      "LAN, WAN & Wi-Fi solutions",
      "Structured cabling",
      "Routers, switches, access points",
      "Server installation",
      "Network maintenance & troubleshooting",
    ],
  },
  {
    number: "02",
    slug: "computer-hardware-it-equipment",
    title: "Computer Hardware & IT Equipment",
    summary: "Genuine hardware, supplied, installed and kept running.",
    bullets: [
      "Laptops, desktops, servers & storage",
      "Printers, scanners & photocopiers",
      "IT accessories & peripherals",
      "UPS & power backup solutions",
      "Installation, upgrades & maintenance",
    ],
  },
  {
    number: "03",
    slug: "software-digital-solutions",
    title: "Software & Digital Solutions",
    summary: "Custom software and digital tools that fit how you work.",
    bullets: [
      "Business software solutions",
      "Website design & development",
      "Web applications",
      "Database solutions",
      "Business process automation",
      "Software installation & support",
    ],
  },
  {
    number: "04",
    slug: "cctv-security-systems",
    title: "CCTV & Security Systems",
    summary: "Complete surveillance systems for premises and remote sites.",
    bullets: [
      "CCTV camera supply & installation",
      "IP surveillance systems",
      "DVR/NVR configuration",
      "Access control systems",
      "Biometric systems",
      "Remote monitoring solutions",
    ],
  },
  {
    number: "05",
    slug: "cybersecurity-data-protection",
    title: "Cybersecurity & Data Protection",
    summary: "Protecting your network, data and endpoints from threats.",
    bullets: [
      "Network security solutions",
      "Firewall & endpoint protection",
      "Data backup & recovery",
      "Cybersecurity assessment",
      "Access management",
      "Security monitoring & support",
    ],
  },
  {
    number: "06",
    slug: "cloud-it-support-services",
    title: "Cloud & IT Support Services",
    summary: "Cloud infrastructure and responsive day-to-day IT support.",
    bullets: [
      "Cloud computing solutions",
      "Cloud storage & backup",
      "Email & productivity solutions",
      "Remote IT support",
      "IT helpdesk services",
      "System monitoring & maintenance",
    ],
  },
  {
    number: "07",
    slug: "ict-consultancy",
    title: "ICT Consultancy",
    summary: "Strategic guidance to plan and execute your technology roadmap.",
    bullets: [
      "IT infrastructure planning",
      "Technology consulting",
      "IT project management",
      "System assessment & evaluation",
      "Digital transformation solutions",
      "Technical training & user support",
    ],
  },
  {
    number: "08",
    slug: "power-technology-solutions",
    title: "Power & Technology Solutions",
    summary: "Dependable power backup to keep your IT equipment running.",
    bullets: [
      "UPS & backup power solutions",
      "Inverter systems",
      "Solar-powered solutions",
      "Power protection for IT equipment",
      "Installation & maintenance of power systems",
    ],
  },
  {
    number: "09",
    slug: "office-enterprise-technology-solutions",
    title: "Office & Enterprise Technology Solutions",
    summary: "Technology that runs your office and meeting rooms smoothly.",
    bullets: [
      "Office automation solutions",
      "Printing & document management systems",
      "Video conferencing solutions",
      "Conference room technology",
      "Attendance & time management systems",
    ],
  },
  {
    number: "10",
    slug: "it-maintenance-technical-support",
    title: "IT Maintenance & Technical Support",
    summary: "Preventive maintenance and responsive support contracts.",
    bullets: [
      "Preventive maintenance",
      "Hardware & software troubleshooting",
      "Network & server maintenance",
      "CCTV maintenance",
      "System upgrades",
      "On-site technical support",
      "AMC & support contracts",
    ],
  },
];

export type Differentiator = {
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "Professional Expertise",
    description:
      "A team of experienced engineers and technicians across networking, security and software.",
  },
  {
    title: "Quality Solutions",
    description:
      "Genuine equipment and documented, tested installations on every project.",
  },
  {
    title: "Reliable After-Sales Support",
    description:
      "Support doesn't end at installation — we stay on for maintenance and troubleshooting.",
  },
  {
    title: "Customized Solutions",
    description:
      "Every recommendation is scoped to your organization's size, budget and goals.",
  },
  {
    title: "Timely Project Delivery",
    description:
      "Clear timelines and milestones, communicated and met.",
  },
];

export const company = {
  name: "BlazeTech Integrated Service Limited",
  shortName: "BlazeTech",
  tagline: "Innovation. Solutions. Excellence.",
  phone: "08039673735",
  phoneIntl: "+2348039673735",
  email: "blazetechintegrated@gmail.com",
  website: "www.blazetech.com.ng",
  address: "No 43 Nouakchott Street, WUSE Zone 1, Abuja",
};
