import { Box } from '@chakra-ui/react';
import React from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

export function CustomLink({
  sidebarSize,
  to,
  children,
  ...props
}: Omit<LinkProps, 'children'> & {
  sidebarSize: 'large' | 'small';
  children: any;
}) {
  return (
    <NavLink
      to={to!}
      {...props}
      style={{ width: sidebarSize === 'large' ? '100%' : 'initial' }}
    >
      {({ isActive }) => (
        <Box
          p='3'
          bg={isActive ? '#f2f7ff' : 'initial'}
          color={isActive ? '#0066ff' : 'initial'}
          borderRadius='lg'
          borderLeft={isActive ? '5px solid #0066ff' : 'none'}
          _hover={{ textDecor: 'none', color: '#0066ff', bg: '#f2f7ff' }}
        >
          {children!(isActive)}
        </Box>
      )}
    </NavLink>
  );
}
