import { Box } from '@chakra-ui/react';
import React from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

export function CustomLink({
  sidebarSize,
  children,
  to,
  ...props
}: LinkProps & { sidebarSize: 'large' | 'small' }) {
  return (
    <NavLink
      to={to}
      {...props}
      style={{ width: sidebarSize === 'large' ? '100%' : 'initial' }}
    >
      {({ isActive }) => (
        <Box
          p='3'
          bg={isActive ? '#1967d21a' : 'initial'}
          color={isActive ? '#1967D2' : 'initial'}
          borderRadius='lg'
          _hover={{ textDecor: 'none', color: '#1967D2', bg: '#1967d21a' }}
        >
          {children}
        </Box>
      )}
    </NavLink>
  );
}
