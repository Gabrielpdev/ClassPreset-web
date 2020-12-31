import React, { createContext, useCallback, useState, useContext } from 'react';
import { useCookies } from "react-cookie"
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  registration: string;
  cellphone: string;
  cpf: string;
  password: string;
}

interface SignInCredentials {
  identify: string;
  password: string;
  choice: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [_, setCookie] = useCookies(["user", "token"])
 
  const signIn = useCallback(async ({ identify, password, choice }) => {
    const response = await api.post('/session', {
      identify,
      password,
      choice
    });

    const { token, user } = response.data;
    
    setCookie("user", JSON.stringify(user), {
      path: "/",
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    })

    api.defaults.headers.authorization = `Bearer ${token}`;
  }, []);

  const signOut = useCallback(() => {
    setCookie("user", '', {
      path: "/",
      maxAge: -1,
      sameSite: true,
    })
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setCookie("user", JSON.stringify(user), {
        path: "/",
        maxAge: 3600,
        sameSite: true,
      })
    },[],
  );

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}