import React from 'react';
import { LinkProps } from 'react-router-dom';
export declare const Header: ({ toggleDrawer, linkProps, toolsBox: ToolsBox, }: {
    toggleDrawer: () => void;
    linkProps?: LinkProps | undefined;
    toolsBox: React.LazyExoticComponent<React.ComponentType<any>>;
}) => JSX.Element;
