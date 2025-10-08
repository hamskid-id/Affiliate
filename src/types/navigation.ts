export interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<any>;
  items?: {
    title: string;
    url: string;
  }[];
}

export interface AppSidebarData {
  navMain: readonly NavItem[];
  appName?: string;
  logoIcon?: React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}
