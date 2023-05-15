import {
  Avatar,
  AvatarBadge,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SidebarRouteProps } from './index.types';
import { NavItem } from './navItem';

export const SideBar = ({
  sidebarSize,
  sidebarSizeSetter,
  variant,
  isDrawerOpen,
  drawerOnClose,
  ctx,
  title,
  subTitle,
  avatarSource,
}: {
  sidebarSize: 'small' | 'large';
  sidebarSizeSetter: React.Dispatch<React.SetStateAction<'small' | 'large'>>;
  variant: 'drawer' | 'sidebar';
  isDrawerOpen: boolean;
  drawerOnClose: () => void;
  ctx: SidebarRouteProps[];
  title: string;
  subTitle: string;
  avatarSource?: string;
}) => {
  return variant === 'sidebar' ? (
    <Flex
      h={{ xl: 'calc(100vh - 60px)', '2xl': 'calc(100vh - 75px)' }}
      overflowY='scroll'
      w={sidebarSize === 'small' ? '75px' : { xl: '300px', '2xl': '350px' }}
      ps={sidebarSize === 'small' ? 'initial' : { xl: '30px', '2xl': '50px' }}
      boxShadow='lg'
      flexDir='column'
      justifyContent='space-between'
      transition='all 0.5s'
      zIndex={1}
    >
      <Flex
        p='2'
        flexDir='column'
        alignItems={sidebarSize === 'small' ? 'center' : 'flex-start'}
        as='nav'
      >
        <IconButton
          aria-label=''
          _hover={{ bg: 'none' }}
          variant='outline'
          icon={
            sidebarSize === 'small' ? <FiChevronLeft /> : <FiChevronRight />
          }
          onClick={() =>
            sidebarSizeSetter(sidebarSize === 'small' ? 'large' : 'small')
          }
          alignSelf={sidebarSize === 'small' ? 'center' : 'end'}
        />
        {ctx
          .filter((q) => !!q.show)
          .map((q) => (
            <NavItem
              variant={variant}
              key={q.path}
              icon={q.icon!}
              sidebarSize={sidebarSize}
              title={q.title}
              path={q.path}
              badgeProps={q.badgeProps}
              children={q.children}
            />
          ))}
      </Flex>
      <Flex
        p='4'
        flexDirection='column'
        w='100%'
        alignItems={sidebarSize === 'small' ? 'center' : 'flex-start'}
      >
        <Divider display={sidebarSize === 'small' ? 'none' : 'flex'} />
        <Flex mt='4' align='center'>
          <Avatar src={avatarSource} objectFit='contain'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
          <Flex
            display={sidebarSize === 'small' ? 'none' : 'flex'}
            flexDir='column'
            ms='4'
          >
            <Heading as='h3' size='sm'>
              {title}
            </Heading>
            <Text fontSize='xs'>{subTitle}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <Drawer
      isOpen={isDrawerOpen}
      placement='right'
      onClose={drawerOnClose}
      size={{ base: 'xs', sm: 'sm', md: 'md' }}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            {ctx
              .filter((q) => !!q.show)
              .map((q) => (
                <NavItem
                  variant={variant}
                  key={q.path}
                  icon={q.icon!}
                  sidebarSize={sidebarSize}
                  title={q.title}
                  path={q.path}
                  children={q.children}
                />
              ))}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
