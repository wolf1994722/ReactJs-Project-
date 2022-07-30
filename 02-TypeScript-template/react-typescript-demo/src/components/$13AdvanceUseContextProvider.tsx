import { useState, createContext } from "react";

type AuthUser = {
  user: string;
  email: string;
};

type AdvanceUseContextProviderProps = {
  children: React.ReactNode;
};

type userState = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const AuthUserContext = createContext<userState | null>({} as userState);

function AdvanceUseContextProvider({
  children,
}: AdvanceUseContextProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <>
      <AuthUserContext.Provider value={{ user, setUser }}>
        {children}
      </AuthUserContext.Provider>
    </>
  );
}

export default AdvanceUseContextProvider;
