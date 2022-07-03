/// <reference types="react" />
import { IconType } from 'react-icons';
interface MainLayoutProps {
    sidebarRoutes: {
        title: string;
        path: string;
        icon?: IconType;
        description?: string;
    }[];
}
export declare const MainLayout: ({ sidebarRoutes }: MainLayoutProps) => JSX.Element;
export {};
