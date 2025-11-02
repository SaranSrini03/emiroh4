declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  // Extend SVGProps to include size and other custom props
  interface LucideIconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
  }
  
  export type Icon = ComponentType<LucideIconProps>;
  
  // Icons used in ProfileHeader.tsx
  export const Instagram: Icon;
  export const Heart: Icon;
  export const Phone: Icon;
  export const Mail: Icon;
  export const RefreshCw: Icon;
  export const BarChart2: Icon;
  export const Download: Icon;
  export const Send: Icon;
  export const MapPin: Icon;
  export const Upload: Icon;
}
