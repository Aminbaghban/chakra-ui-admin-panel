import React, { useEffect } from 'react';
import { Navigate, useLocation, useSearchParams } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({
  children,
  authStatusChecker,
}: {
  children: React.ReactNode;
  authStatusChecker: () => Promise<boolean>;
}) {
  let [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  let signin = (newUser: string, callback: VoidFunction) => {
    // return fakeAuthProvider.signin(() => {
    //   setUser(newUser);
    //   callback();
    // });
  };

  let signout = (callback: VoidFunction) => {
    // return fakeAuthProvider.signout(() => {
    //   setUser(null);
    //   callback();
    // });
  };
  useEffect(() => {
    const checkAuth = async () => {
      authStatusChecker()
        .then(() => setIsAuthenticated(true))
        .catch(() => setIsAuthenticated(false));
    };
    checkAuth().catch((error) => {
      console.log(error);
    });
  }, [authStatusChecker]);

  let value = { isAuthenticated, signin, signout };

  if (!isAuthenticated) {
    return <div>amin</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
}
function useQueryParam<T extends { [k: string]: string }>(): {
  searchAsObject: T;
} {
  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(search.entries()) as T;
  return { searchAsObject };
}
