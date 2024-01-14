import React, { useContext, createContext, useState, useMemo } from "react";
import { AuthContextType, User } from "../Types/types";

interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: undefined,
    saveUser: () => {},
    saveToken: () => {},
})

export function AuthProvider({children}: AuthProviderProps) {
    
    const [user, setUser] = useState<User | undefined>(getUser());

    function saveUser(data: User) {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
    }

    function getToken() {
        return localStorage.getItem("token");
    }

    function getUser() {
        const user = localStorage.getItem("user");

        return !!user ? JSON.parse(user) as User : undefined;
    }

    function saveToken(token: string) {
        localStorage.setItem("token", token);
    }

    const isAuthenticated = useMemo( () => {
        return !!getToken();
    }, [getToken]);

    return (
    <AuthContext.Provider value={{ isAuthenticated, user, saveUser, saveToken }}>
        {children}
    </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);