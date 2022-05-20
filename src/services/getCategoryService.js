import axios from "axios";
import { toast } from "react-toastify";

export const getCategoryService = async(setAllCategories) =>{
      try {
          const response = await axios.get("/api/categories");
          if(response.status === 200){
              setAllCategories(response.data.categories)
          }else{
            throw new Error("Request Failed, Can't get Data");
          }
        
      } catch (error) {
          toast.error(error.message)
          console.log(error)
      }
}
