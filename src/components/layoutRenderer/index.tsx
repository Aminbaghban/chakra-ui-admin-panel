import { Center, Spinner } from '@chakra-ui/react';
import { MainLayout } from 'components/layout';
import { AuthProvider } from 'contexts/auth';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayoutRendererProps } from './index.types';

export const LayoutRenderer = ({ ...ctx }: LayoutRendererProps) => {
  return (
    <AuthProvider authStatusChecker={ctx.authStatusChecker}>
      <Routes>
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
            .filter((q) => !q.isIndex)
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
          <Route path='*' element={<Center w='full'>404</Center>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
