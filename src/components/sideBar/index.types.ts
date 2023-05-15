
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
