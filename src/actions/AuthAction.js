import * as AuthApi from "../api/ApiRequest" 

export const Login =(formData)=>async(dispatch)=> {
    dispatch({type:"AUTH_START"})
    try{
        const {data}=await AuthApi.logIn(formData)
        dispatch({type:"AUTH_SUCCESS",data:data})
    }catch(err){
        console.log(err.message)
        dispatch({type:"AUTH_FAIL"})
    }
}


export const SignUp =(formData)=>async(dispatch)=> {
    dispatch({type:"AUTH_START"})
    try{
        const {data}=await AuthApi.signUp(formData)
        dispatch({type:"AUTH_SUCCESS",data:data})
    }catch(err){
        console.log(err.message)
        dispatch({type:"AUTH_FAIL"})
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:"LOG_OUT"})
}