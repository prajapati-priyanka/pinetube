
export const checkIfAllInputIsPresent = (userData) =>{
  
    if(userData.firstName === "" || userData.lastName === "" || userData.email === "" || userData.password === "" || userData.confirmPass === "" ){
        return false
    }else{
        return true
    }
}