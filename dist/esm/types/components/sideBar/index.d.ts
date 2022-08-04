import React from 'react';
import { SidebarRouteProps } from './index.types';
export declare const SideBar: ({ sidebarSize, sidebarSizeSetter, variant, isDrawerOpen, drawerOnClose, ctx, title, subTitle, avatarSource, }: {
    sidebarSize: 'small' | 'large';
    sidebarSizeSetter: React.Dispatch<React.SetStateAction<'small' | 'large'>>;
    variant: 'drawer' | 'sidebar';
    isDrawerOpen: boolean;
    drawerOnClose: () => void;
    ctx: SidebarRouteProps[];
    title: string;
    subTitle: string;
    avatarSource?: string | undefined;
}) => JSX.Element;
