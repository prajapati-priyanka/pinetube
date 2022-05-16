import axios from "axios";
import { toast } from "react-toastify";



export const loginService = async (user,authDispatch,navigate,location) =>{
    try {
        const response = await axios.post("/api/auth/login", {
          email: user.email,
          password: user.password,
        });
  
        
        const { status } = response;
        const { encodedToken: token, foundUser } = response.data;
  
        if (status === 200) {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(foundUser));
          authDispatch({
            type: "LOGIN",
            payload: { user: foundUser, token: token },
          });
           toast.success("You are Succesfully Logged In")
          navigate(location.state.from.pathname);
        } else {
          throw new Error("Can't process the request, Please try again later");
        }
      } catch (err) {
        console.error(err);
      }
}

export const signupService = async(userData, authDispatch, navigate,location) =>{
    try {
        const response = await axios.post("/api/auth/signup", userData)
            console.log(response)
          const { encodedToken: token, createdUser } = response.data;
          if (response.status === 201) {
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify("createdUser"));
            authDispatch({
              type: "SIGN_UP",
              payload: { user: createdUser, token: token },
            });
            toast.success("You account is successfully created")
            navigate(location.state.from.pathname);
          }
        } catch (err) {
          console.log(err);
        }
}