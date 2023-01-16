/// <reference types="react" />
import { BadgeProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
export declare const NavItem: ({ sidebarSize, icon, title, link, variant, badgeProps, }: {
    sidebarSize: 'small' | 'large';
    icon: IconType;
    title: string;
    link: string;
    variant: 'drawer' | 'sidebar';
    badgeProps?: BadgeProps | undefined;
}) => JSX.Element;
