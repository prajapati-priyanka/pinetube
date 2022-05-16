import { createContext,useContext, useState } from "react";



const SideNavContext = createContext();

const SideNavProvider = ({children}) =>{
    const [sideNavShrinked, setSideNavShrinked] = useState(false)
    return(
        <SideNavContext.Provider value={{sideNavShrinked, setSideNavShrinked}}>
            {children}
        </SideNavContext.Provider>
    )
}

const useSideNav = () => useContext(SideNavContext);

export {SideNavProvider, useSideNav}