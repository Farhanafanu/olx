import {createContext, useState, useMemo} from 'react'

export const Firebasecontext=createContext(null)
export const AuthContext=createContext({
 user: null,
 setUser: () => {}, // Dummy function
});

export default function AuthProvider({children}){
 const [user,setUser]=useState(null)
 const authContextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

 return(
 <AuthContext.Provider value={authContextValue}>
   {children}
 </AuthContext.Provider>
 )
}
