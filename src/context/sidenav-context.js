import { createContext,useContext, useState } from "react";

const SideNavContext = createContext();

const SideNavProvider = ({children}) =>{
    const [sideNavDisplay, setSideNavDisplay] = useState(false)
    return(
        <SideNavContext.Provider value={{sideNavDisplay, setSideNavDisplay}}>
            {children}
        </SideNavContext.Provider>
    )
}

const useSideNav = () => useContext(SideNavContext);

export {SideNavProvider, useSideNav}
