import { Center, Spinner } from '@chakra-ui/react';
import { AutoMetaTagBuilder } from 'components/auto-meta-tags-builder';
import { MainLayout } from 'components/layout';
import { AuthProvider } from 'contexts/auth';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LayoutRendererProps, RouteProps } from './index.types';

const routesRenderer = (routes: RouteProps[]) => {
  const Index = routes.find((q) => q.isIndex)?.component;
  return (
    <>
      {!!Index && (
        <Route
          index
          element={
            <React.Suspense
              fallback={
                <Center w='full'>
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='#1d68d2'
                    size='xl'
                  />
                </Center>
              }
            >
              <Index />
            </React.Suspense>
          }
        />
      )}
      {routes
        .filter((q) => !q.isIndex && !q.isInModal)
        .map((q) => {
          var Component = q.component!;
          return (
            <Route
              key={q.path}
              path={q.path}
              element={
                <React.Suspense
                  fallback={
                    <Center w='full'>
                      <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='#1d68d2'
                        size='xl'
                      />
                    </Center>
                  }
                >
                  <AutoMetaTagBuilder route={q}>
                    <Component />
                  </AutoMetaTagBuilder>
                </React.Suspense>
              }
            >
              {!!q.childRoutes && routesRenderer(q.childRoutes)}
            </Route>
          );
        })}
    </>
  );
};

export const LayoutRenderer = ({ ...ctx }: LayoutRendererProps) => {
  let location = useLocation();

  let modalRoute = ctx.routes.find(
    (q) =>
      (!!q.isInModal && !!q.backgroundPath && q.path === location.pathname) ||
      (!!q.isInModal &&
        !!q.backgroundPath &&
        location.pathname.includes(
          q.path.substring(0, q.path.indexOf(q.routeDynamicSection ?? '$')) ||
            '$'
        ))
  );

  return (
    <AuthProvider authStatusChecker={ctx.authStatusChecker}>
      <Routes location={modalRoute?.backgroundPath ?? location}>
        <Route
          path='/'
          element={
            <MainLayout
              {...ctx}
              sidebarRoutes={ctx.routes
                .filter((q) => q.isInSidebar)
                .map((q) => ({
                  description: q.description,
                  icon: q.icon,
                  path: q.path,
                  title: q.title,
                  badgeProps: q.badgeProps,
                }))}
            />
          }
        >
          {routesRenderer(ctx.routes)}
          <Route path='*' element={<Center w='full'>404</Center>} />
        </Route>
      </Routes>
      {modalRoute && (
        <Routes>
          {ctx.routes
            .filter((q) => !q.isIndex && q.isInModal)
            .map((q) => {
              var Component = q.component!;
              return (
                <Route
                  key={q.path}
                  path={q.path}
                  element={
                    <React.Suspense
                      fallback={
                        <Center w='full'>
                          <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='#1d68d2'
                            size='xl'
                          />
                        </Center>
                      }
                    >
                      <Component />
                    </React.Suspense>
                  }
                />
              );
            })}
        </Routes>
      )}
    </AuthProvider>
  );
};
