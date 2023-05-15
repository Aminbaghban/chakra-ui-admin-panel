import React from 'react';
interface AuthContextType {
    isAuthenticated: boolean;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
    userRoles?: Array<string>;
}
export declare function AuthProvider({ children, authStatusChecker, userRoles, }: {
    children: React.ReactNode;
    authStatusChecker: () => Promise<boolean>;
    userRoles?: Array<string>;
}): JSX.Element;
export declare function useAuth(): AuthContextType;
export declare function RequireAuth({ children }: {
    children: JSX.Element;
}): JSX.Element;
export {};
