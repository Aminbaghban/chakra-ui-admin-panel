<<<<<<< HEAD
import { BadgeProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface SidebarRouteProps {
  title: string;
  path: string;
  icon?: IconType;
  description?: string;
  badgeProps?: BadgeProps;
  children: Array<SidebarRouteProps>;
  show: boolean;
}
=======
import { BadgeProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

export interface SidebarRouteProps {
  title: string;
  path: string;
  icon?: IconType;
  description?: string;
  badgeProps?: BadgeProps;
  children: Array<SidebarRouteProps>;
  show: boolean;
}
>>>>>>> 208dee2c6bfe405a883577f07f1755c720f780ea
