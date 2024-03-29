/// <reference types="react" />
import { MenuListProps, BadgeProps } from '@chakra-ui/react';
import { SidebarRouteProps } from 'components/sideBar/index.types';
import React from 'react';
import { IconType } from 'react-icons';
import { LinkProps } from 'react-router-dom';

interface LayoutRendererProps extends Omit<MainLayoutProps, 'sidebarRoutes'> {
    routes: RouteProps[];
    authStatusChecker: () => Promise<boolean>;
    /**
     * You should pass rendered chakra's <MenuList><MenuItem></MenuItem></MenuList>
     */
    headerMenuContentList?: React.ReactElement<MenuListProps>;
    userRoles?: Array<string>;
}
interface RouteProps {
    title: string;
    path?: string;
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
    isInModal?: boolean;
    backgroundPath?: string;
    routeDynamicSection?: string;
    childRoutes?: RouteProps[];
    badgeProps?: BadgeProps;
    allowedRoles?: Array<string>;
}
interface MainLayoutProps {
    sidebarRoutes: Array<SidebarRouteProps>;
    sidebarTitle: string;
    sidebarSubTitle: string;
    sidebarAvatarSrc?: string;
    headerMenuContentList?: React.ReactElement<MenuListProps>;
    logoLinkProps?: LinkProps;
    navbarToolsBox: React.LazyExoticComponent<React.ComponentType<any>>;
}

declare const LayoutRenderer: ({ ...ctx }: LayoutRendererProps) => JSX.Element;

export { LayoutRenderer, LayoutRendererProps, RouteProps };
