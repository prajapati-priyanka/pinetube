export const checkItemInArrayOfObject = (array, videos)=>{
    return array.find((item) => item._id === videos._id);
}
