/// <reference types="react" />
import { LinkProps } from 'react-router-dom';
export declare function CustomLink({ sidebarSize, children, to, ...props }: LinkProps & {
    sidebarSize: 'large' | 'small';
}): JSX.Element;
