export const watchLaterReducer = (state,action) =>{
    switch (action.type) {
        case "ADD_TO_WATCH_LATER":
            return{
                ...state,
                watchLater: action.payload
            }
        case "REMOVE_FROM_WATCH_LATER":
            return{
                ...state,
                watchLater: action.payload
            }
    
        default:
            return state
    }
}
