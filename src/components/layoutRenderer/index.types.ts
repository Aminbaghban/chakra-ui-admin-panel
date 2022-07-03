import { IconType } from 'react-icons';

export interface MainLayoutProps {
  routes: RouteProps[];
  indexComponent: JSX.Element;
  authStatusChecker: () => Promise<boolean>;
}

export interface RouteProps {
  title: string;
  path: string;
  /**
   * you should be authenticated in order to access to this kind of pages.
   */
  isPrivate: boolean;
  isInSidebar: boolean;
  /**
   * it should begin with `pages/`, then you can specify the component you need to be lazy loaded.
   */
  component?: React.LazyExoticComponent<React.ComponentType<any>>;
  description?: string;
  icon?: IconType;
  isIndex?: boolean;
}
