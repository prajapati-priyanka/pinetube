export const historyReducer = (state,action)=>{
    switch (action.type) {
        case "ADD_VIDEO":
            return{
                ...state,
                history: action.payload
            }
         
        case "REMOVE_FROM_HISTORY":
            return{
                ...state,
                history: action.payload
            }
         
         
        case "REMOVE_ALL":
            return{
                ...state,
                history: action.payload
            }
         
    
        default:
            return state
    }
}
