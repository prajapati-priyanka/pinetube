import { createContext,useContext,useReducer} from "react";
import { likeReducer } from "../reducer/like-reducer";

const LikeContext = createContext();

const likeInitialState={
    likeData:[]
}

const LikeProvider = ({children}) =>{
   
    const [likeState, likeDispatch] = useReducer(likeReducer, likeInitialState);

    return <LikeContext.Provider value={{likeState, likeDispatch}}>
        {children}
    </LikeContext.Provider >
}

const useLike = () => useContext(LikeContext);

export {useLike, LikeProvider}
