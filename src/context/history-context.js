import { createContext,useContext,useReducer } from "react";
import { historyReducer } from "../reducer";

const historyInitialState = {
    history : []
}

const HistoryContext = createContext();

const HistoryProvider = ({children}) =>{
    
    const [historyState, historyDispatch] = useReducer(historyReducer, historyInitialState)

    return <HistoryContext.Provider value={{historyState, historyDispatch}}>
        {children}
    </HistoryContext.Provider>
}

const useHistory = () => useContext(HistoryContext);

export {HistoryProvider, useHistory}
