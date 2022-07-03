import React from 'react';
interface AuthContextType {
    isAuthenticated: boolean;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}
export declare function AuthProvider({ children, authStatusChecker, }: {
    children: React.ReactNode;
    authStatusChecker: () => Promise<boolean>;
}): JSX.Element;
export declare function useAuth(): AuthContextType;
export declare function RequireAuth({ children }: {
    children: JSX.Element;
}): JSX.Element;
export {};
