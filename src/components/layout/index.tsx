<<<<<<< HEAD
import { Box, Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { ErrorFallback } from 'components/generic-error';
import { Header } from 'components/header';
import { MainLayoutProps } from 'components/layoutRenderer/index.types';
import { SideBar } from 'components/sideBar';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

export const MainLayout = ({ ...ctx }: MainLayoutProps) => {
  const [sidebarSize, setSidebarSize] = React.useState<'small' | 'large'>(
    'large'
  );
  const smVariant = { navigation: 'drawer', navigationButton: true };
  const lgVariant = { navigation: 'sidebar', navigationButton: false };
  const variants = useBreakpointValue({
    base: smVariant,
    sm: smVariant,
    md: smVariant,
    lg: lgVariant,
  });
  let location = useLocation();
  const { isOpen, onClose, onOpen } = useDisclosure();

  React.useEffect(() => {
    onClose();
  }, [location]);

  return (
    <>
      <Header
        toggleDrawer={onOpen}
        linkProps={ctx.logoLinkProps}
        toolsBox={ctx.navbarToolsBox}
      />
      <Flex>
        <SideBar
          ctx={[...ctx.sidebarRoutes]}
          sidebarSize={sidebarSize}
          sidebarSizeSetter={setSidebarSize}
          isDrawerOpen={isOpen}
          drawerOnClose={onClose}
          variant={variants?.navigation as 'drawer' | 'sidebar'}
          title={ctx.sidebarTitle}
          subTitle={ctx.sidebarSubTitle}
          avatarSource={ctx.sidebarAvatarSrc}
        />
        <Box
          h={{ xl: 'calc(100vh - 60px)', '2xl': 'calc(100vh - 75px)' }}
          display='inline-block'
          w={
            variants?.navigation === 'sidebar'
              ? sidebarSize === 'small'
                ? 'calc(100vw - 75px)'
                : { xl: 'calc(100vw - 300px)', '2xl': 'calc(100vw - 350px)' }
              : 'full'
          }
          bg='#f5f7fc'
          p={{ base: '4', md: '6', '2xl': '12' }}
          overflowY='scroll'
          minH={{ base: '100vh', lg: 'initial' }}
        >
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            resetKeys={[location]}
          >
            <Outlet />
          </ErrorBoundary>
        </Box>
      </Flex>
    </>
  );
};
=======
import {
  Box,
  Flex,
  ScaleFade,
  useBoolean,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { ErrorFallback } from 'components/generic-error';
import { Header } from 'components/header';
import { MainLayoutProps } from 'components/layoutRenderer/index.types';
import { SideBar } from 'components/sideBar';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router-dom';

export const MainLayout = ({ ...ctx }: MainLayoutProps) => {
  const [sidebarSize, setSidebarSize] = React.useState<'small' | 'large'>(
    'large'
  );
  const smVariant = { navigation: 'drawer', navigationButton: true };
  const lgVariant = { navigation: 'sidebar', navigationButton: false };
  const variants = useBreakpointValue({
    base: smVariant,
    sm: smVariant,
    md: smVariant,
    lg: lgVariant,
  });
  let location = useLocation();
  const { isOpen, onClose, onOpen } = useDisclosure();

  React.useEffect(() => {
    onClose();
  }, [location]);

  return (
    <>
      <Header
        toggleDrawer={onOpen}
        linkProps={ctx.logoLinkProps}
        toolsBox={ctx.navbarToolsBox}
      />
      <Flex>
        <SideBar
          ctx={[...ctx.sidebarRoutes]}
          sidebarSize={sidebarSize}
          sidebarSizeSetter={setSidebarSize}
          isDrawerOpen={isOpen}
          drawerOnClose={onClose}
          variant={variants?.navigation as 'drawer' | 'sidebar'}
          title={ctx.sidebarTitle}
          subTitle={ctx.sidebarSubTitle}
          avatarSource={ctx.sidebarAvatarSrc}
        />
        <Box
          h={{ xl: 'calc(100vh - 60px)', '2xl': 'calc(100vh - 75px)' }}
          display='inline-block'
          w={
            variants?.navigation === 'sidebar'
              ? sidebarSize === 'small'
                ? 'calc(100vw - 75px)'
                : { xl: 'calc(100vw - 300px)', '2xl': 'calc(100vw - 350px)' }
              : 'full'
          }
          bg='#f5f7fc'
          p={{ base: '4', md: '6', '2xl': '12' }}
          overflowY='scroll'
          minH={{ base: '100vh', lg: 'initial' }}
        >
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            resetKeys={[location]}
          >
            <ScaleFade key={location.pathname} initialScale={0.6} in={true}>
              <Outlet />
            </ScaleFade>
          </ErrorBoundary>
        </Box>
      </Flex>
    </>
  );
};
>>>>>>> 208dee2c6bfe405a883577f07f1755c720f780ea
