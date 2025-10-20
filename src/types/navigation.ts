export interface NavItem {
  title: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  items?: {
    title: string;
    url: string;
  }[];
  hideNav?: boolean;
  hideHeader?: boolean;
}

export interface AppSidebarData {
  navMain: readonly NavItem[];
  appName?: string;
  logoIcon?: React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}
