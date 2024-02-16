import {
  IconArchive,
  IconCalendar,
  IconDeviceLaptop,
  IconDice4,
  IconFile,
  IconFolder,
  IconMap,
  IconTrendingUp,
} from "@tabler/icons-react";

export const MAIN_MENU = [
  { icon: IconDeviceLaptop, label: "Dashboard", url: "#", active: true },
  { icon: IconCalendar, label: "Calendar", url: "#", active: false },
  { icon: IconFile, label: "File", url: "#", active: false },
  { icon: IconFolder, label: "Folder", url: "#", active: false },
  { icon: IconTrendingUp, label: "Trends", url: "#", active: false },
  { icon: IconMap, label: "Map", url: "#", active: false },
  { icon: IconDice4, label: "Other", url: "#", active: false },
  { icon: IconArchive, label: "Reports", url: "#", active: false },
];
export const SUBMENU = [
  { label: "Web Analytics", url: "#", active: false },
  { label: "Sales Monitoring", url: "#", active: false },
  { label: "Ad Campaign", url: "#", active: false },
  { label: "Event Management", url: "#", active: false },
  { label: "Helpdesk Management", url: "#", active: false },
  { label: "Finance Monitoring", url: "#", active: true },
  { label: "Cryptocurrency", url: "#", active: false },
  { label: "Executive / SaaS", url: "#", active: false },
  { label: "Campaign Monitoring", url: "#", active: false },
  { label: "Product Management", url: "#", active: false },
];
