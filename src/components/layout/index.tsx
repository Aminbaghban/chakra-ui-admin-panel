import { Box, Flex, useBoolean, useBreakpointValue } from '@chakra-ui/react';
import { ErrorFallback } from 'components/generic-error';
import { Header } from 'components/header';
import { SideBar } from 'components/sideBar';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { IconType } from 'react-icons';
import { Outlet, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  sidebarRoutes: {
    title: string;
    path: string;
    icon?: IconType;
    description?: string;
  }[];
}

export const MainLayout = ({ sidebarRoutes }: MainLayoutProps) => {
  const [sidebarSize, setSidebarSize] = React.useState<'small' | 'large'>(
    'large'
  );
  const smVariant = { navigation: 'drawer', navigationButton: true };
  const mdVariant = { navigation: 'sidebar', navigationButton: false };
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });
  let location = useLocation();
  const [isDrawerOpen, setDrawerOpen] = useBoolean();

  return (
    <>
      <Header toggleDrawer={setDrawerOpen.on} />
      <Flex>
        <SideBar
          ctx={[...sidebarRoutes]}
          sidebarSize={sidebarSize}
          sidebarSizeSetter={setSidebarSize}
          isDrawerOpen={isDrawerOpen}
          drawerOnClose={setDrawerOpen.off}
          variant={variants?.navigation as 'drawer' | 'sidebar'}
        />
        <Box
          h='calc(100vh - 100px)'
          display='inline-block'
          w={
            variants?.navigation === 'sidebar'
              ? sidebarSize === 'small'
                ? 'calc(100vw - 75px)'
                : 'calc(100vw - 300px)'
              : 'full'
          }
          bg='#f5f7fc'
          p={{ base: '4', md: '6', lg: '12' }}
          overflowY='scroll'
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
