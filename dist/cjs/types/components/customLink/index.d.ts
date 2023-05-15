/// <reference types="react" />
import { LinkProps } from 'react-router-dom';
export declare function CustomLink({ sidebarSize, to, children, ...props }: Omit<LinkProps, 'children'> & {
    sidebarSize: 'large' | 'small';
    children: any;
}): JSX.Element;
