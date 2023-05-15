<<<<<<< HEAD
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import React from 'react';
import { useAuth } from 'contexts/auth';

export const PrivateRoute = ({
  allowedRoles,
}: {
  allowedRoles?: Array<string>;
}) => {
  const location = useLocation();
  const { userRoles } = useAuth();

  return allowedRoles &&
    !allowedRoles.every((role) => userRoles?.includes(role)) ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
=======
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import React from 'react';
import { useAuth } from 'contexts/auth';

export const PrivateRoute = ({
  allowedRoles,
}: {
  allowedRoles?: Array<string>;
}) => {
  const location = useLocation();
  const { userRoles } = useAuth();

  return allowedRoles &&
    !allowedRoles.every((role) => userRoles?.includes(role)) ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
>>>>>>> 208dee2c6bfe405a883577f07f1755c720f780ea
