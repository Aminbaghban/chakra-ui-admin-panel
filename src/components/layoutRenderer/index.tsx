import { Center, Spinner } from '@chakra-ui/react';
import { AutoMetaTagBuilder } from 'components/auto-meta-tags-builder';
import { MainLayout } from 'components/layout';
import { AuthProvider } from 'contexts/auth';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LayoutRendererProps } from './index.types';

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
                }))}
            />
          }
        >
          <Route index element={ctx.indexComponent} />
          {ctx.routes
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
                />
              );
            })}
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
