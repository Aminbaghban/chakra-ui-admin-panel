
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Collapse,
  Flex,
  Icon,
  Menu,
  MenuButton,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CustomLink } from 'components/customLink';
import React from 'react';
import { SidebarRouteProps } from '../index.types';

export const NavItem = ({
  ...ctx
}: {
  sidebarSize: 'small' | 'large';
  variant: 'drawer' | 'sidebar';
} & Partial<SidebarRouteProps>) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        mt='2'
        flexDir='column'
        w='100%'
        alignItems={ctx.sidebarSize === 'small' ? 'center' : 'flex-start'}
        color='gray.600'
        fontSize='sm'
        borderLeft='3px'
        onClick={(e) => {
          onToggle();
          e.stopPropagation();
        }}
      >
        {ctx.variant === 'sidebar' ? (
          <Menu placement='start' isOpen={isOpen}>
            <CustomLink
              to={ctx.path ?? '#'}
              sidebarSize={ctx.sidebarSize}
              onClick={(e) => {
                if (!!ctx.children) {
                  e.preventDefault();
                }
              }}
            >
              {(isActive: boolean) => (
                <MenuButton w='full'>
                  <Flex align='center'>
                    <Icon as={ctx.icon} fontSize='xl' />
                    <Text
                      fontSize={{ xl: 'sm', '2xl': 'md' }}
                      ms='5'
                      display={ctx.sidebarSize === 'small' ? 'none' : 'flex'}
                    >
                      {ctx.title}
                    </Text>
                    <Spacer />
                    {!!ctx.badgeProps && ctx.sidebarSize === 'large' && (
                      <Badge {...ctx.badgeProps}>
                        {ctx.badgeProps.children}
                      </Badge>
                    )}
                    {!!ctx.children && <ChevronDownIcon />}
                  </Flex>
                </MenuButton>
              )}
            </CustomLink>
          </Menu>
        ) : (
          <CustomLink
            to={ctx.path ?? '#'}
            sidebarSize={ctx.sidebarSize}
            onClick={(e) => {
              if (!!ctx.children) {
                e.preventDefault();
              }
            }}
          >
            {(isActive: boolean) => (
              <Flex align='center'>
                <Icon as={ctx.icon} fontSize='xl' />
                <Text
                  ms='5'
                  display={ctx.sidebarSize === 'small' ? 'none' : 'flex'}
                >
                  {ctx.title}
                </Text>
                <Spacer />
                {!!ctx.children && <ChevronDownIcon />}
              </Flex>
            )}
          </CustomLink>
        )}
      </Flex>
      {ctx.children && (
        <Box bg='#f9fcff' rounded='md' w='full'>
          <Collapse in={isOpen} animateOpacity style={{ width: '100%' }}>
            {ctx.children.map((q) => (
              <NavItem
                {...q}
                sidebarSize={ctx.sidebarSize}
                variant={ctx.variant}
              />
            ))}
          </Collapse>
        </Box>
      )}
    </>
  );
};
