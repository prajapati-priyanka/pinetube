export const likeReducer = (state, action) =>{
    switch (action.type) {
        case "ADD_TO_LIKE":
            return{
                ...state,
                likeData: action.payload
            }
        case "DELETE_FROM_LIKE":
            return{
                ...state,
                likeData: action.payload
            }
    
        default:
            return state
    }
}