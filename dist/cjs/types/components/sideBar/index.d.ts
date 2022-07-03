import React from 'react';
import { SidebarRouteProps } from './index.types';
export declare const SideBar: ({ sidebarSize, sidebarSizeSetter, variant, isDrawerOpen, drawerOnClose, ctx, }: {
    sidebarSize: 'small' | 'large';
    sidebarSizeSetter: React.Dispatch<React.SetStateAction<'small' | 'large'>>;
    variant: 'drawer' | 'sidebar';
    isDrawerOpen: boolean;
    drawerOnClose: () => void;
    ctx: SidebarRouteProps[];
}) => JSX.Element;
