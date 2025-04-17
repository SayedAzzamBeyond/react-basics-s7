import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

interface User{
    id: number,
    email: string,
    password: string,
    name: string
}

export function UserProvider({children}: any) {
  const [currentUser ,setCurrentUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{currentUser,setCurrentUser}}>
        {children}
    </UserContext.Provider>
)

}
export function useUserContext() {
    return useContext(UserContext);
}