declare module 'lucide-react' {
  import * as React from 'react';

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Activity: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Award: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Battery: LucideIcon;
  export const Bluetooth: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Bot: LucideIcon;
  export const Brain: LucideIcon;
  export const Calendar: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Clock: LucideIcon;
  export const Download: LucideIcon;
  export const Eye: LucideIcon;
  export const FileImage: LucideIcon;
  export const FileText: LucideIcon;
  export const Globe: LucideIcon;
  export const Heart: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Info: LucideIcon;
  export const Languages: LucideIcon;
  export const Loader2: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Menu: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Mic: LucideIcon;
  export const Phone: LucideIcon;
  export const Send: LucideIcon;
  export const Shield: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Stethoscope: LucideIcon;
  export const Target: LucideIcon;
  export const TrendingDown: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Upload: LucideIcon;
  export const User: LucideIcon;
  export const Users: LucideIcon;
  export const Volume2: LucideIcon;
  export const Watch: LucideIcon;
  export const Weight: LucideIcon;
  export const X: LucideIcon;
  export const Zap: LucideIcon;

  // Fallback for any other icon
  const fallbackIcon: LucideIcon;
  export default fallbackIcon;
}

