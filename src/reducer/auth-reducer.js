export const authReducer = (state,action) =>{
    switch (action.type) {
        case "LOGIN":
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            }  
        case "SIGN_UP":
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            }        
    
        case "CHECK_USER":
                return {
                  ...state,
                  user: action.payload.user,
                  token: action.payload.token,
                };
    
        default:
            return state
    }
}

