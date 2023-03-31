import * as  PostApi from "../api/PostRequest" 

export const getTimeLinePosts=(id)=>async(dispatch)=>{
    dispatch({type:"RETRIVING_START"})
    try{
        const data=await PostApi.getTimeLinePosts(id)
        dispatch({type:"RETRIVING_SUCCESS",data:data})
    }catch(err)
    {
        dispatch({type:"RETRIVING_FAIL"})
        console.log(err)
    }
}