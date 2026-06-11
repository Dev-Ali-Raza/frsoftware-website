import {
  Apple, Award, BarChart3, Blocks, Boxes, Briefcase, Building2, Calculator,
  Code2, Coffee, Cpu, Database, DatabaseZap, Factory, FolderKanban, Glasses,
  Globe, GraduationCap, Headset, LayoutDashboard, LifeBuoy, MessagesSquare,
  MonitorDot, MonitorSmartphone, MousePointerClick, PenTool, Plug, Puzzle,
  Rocket, ScanBarcode, Settings2, ShieldCheck, ShoppingBag, ShoppingCart,
  Stethoscope, Store, TestTubes, UtensilsCrossed, Wallet, Warehouse,
  Workflow, Wrench,
} from 'lucide-react'

/* Explicit map (instead of importing the full lucide icon set) keeps the
   bundle small while letting src/data/site.js reference icons by name. */
const ICONS = {
  Apple, Award, BarChart3, Blocks, Boxes, Briefcase, Building2, Calculator,
  Code2, Coffee, Cpu, Database, DatabaseZap, Factory, FolderKanban, Glasses,
  Globe, GraduationCap, Headset, LayoutDashboard, LifeBuoy, MessagesSquare,
  MonitorDot, MonitorSmartphone, MousePointerClick, PenTool, Plug, Puzzle,
  Rocket, ScanBarcode, Settings2, ShieldCheck, ShoppingBag, ShoppingCart,
  Stethoscope, Store, TestTubes, UtensilsCrossed, Wallet, Warehouse,
  Workflow, Wrench,
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  const Cmp = ICONS[name] || Blocks
  return <Cmp className={className} aria-hidden="true" />
}
