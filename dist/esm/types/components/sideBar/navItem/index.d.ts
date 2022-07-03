/// <reference types="react" />
import { IconType } from 'react-icons';
export declare const NavItem: ({ sidebarSize, icon, title, link, variant, }: {
    sidebarSize: 'small' | 'large';
    icon: IconType;
    title: string;
    link: string;
    variant: 'drawer' | 'sidebar';
}) => JSX.Element;
