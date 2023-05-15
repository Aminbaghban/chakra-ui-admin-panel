import { RouteProps } from 'components/layoutRenderer/index.types';
import React from 'react';
import { Helmet } from 'react-helmet';

export const AutoMetaTagBuilder = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: RouteProps;
}) => {
  return (
    <>
      <Helmet>
        <title>{route.title}</title>
      </Helmet>
      {children}
    </>
  );
};
