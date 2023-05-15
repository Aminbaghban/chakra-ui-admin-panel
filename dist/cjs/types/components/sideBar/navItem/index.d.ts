/// <reference types="react" />
import { SidebarRouteProps } from '../index.types';
export declare const NavItem: ({ ...ctx }: {
    sidebarSize: 'small' | 'large';
    variant: 'drawer' | 'sidebar';
} & Partial<SidebarRouteProps>) => JSX.Element;
