import { createContext,useContext,useReducer } from "react";
import { watchLaterReducer } from "../reducer";

const watchLaterInitialState = {
    watchLater : []
}

const WatchLaterContext = createContext();

const WatchLaterProvider = ({children}) =>{
    const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, watchLaterInitialState)
    return <WatchLaterContext.Provider value={{watchLaterState, watchLaterDispatch}}>
        {children}
    </WatchLaterContext.Provider>
}

const useWatchLater = () => useContext(WatchLaterContext)

export {WatchLaterProvider, useWatchLater}