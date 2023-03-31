import React, { useState } from 'react'
import Logo from "../../img/logo.png"
import { useDispatch, useSelector } from "react-redux"
import "./Auth.css"
import { Login, SignUp } from '../../actions/AuthAction'
function Auth() {
    const [isSignUp, setIsSignUp] = useState(true)
    const dispatch = useDispatch()
    const loading=useSelector((state)=>state.authReducer.loading)
    console.log(loading);
    const [data, setData] = useState({
        firstname: "", lastname: "", password: "", confirmpass: "", username: ""
    })
    const [confirmPass, setConfirmPass] = useState(true)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            data.password == data.confirmpass ?
                dispatch(SignUp(data)) :
                setConfirmPass(false)
        } else {
            dispatch(Login(data))
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
            firstname: "", lastname: "", password: "", confirmpass: "", username: ""
        })
    }

    return (
        <div className="Auth">
            {/* Left Side */}
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className='Webname'>
                    <h1>Ping Media</h1>
                    <h6>Explore the idea throught the world</h6>
                </div>
            </div>
            {/* <SignUp /> Right Side */}
            <div className='a-right'>
                <form className='infoForm authForm' >
                    <h3>{isSignUp ? "Sign Up" : "Sign In"}</h3>
                    {isSignUp && (
                        <div>
                            <input
                                type="text"
                                placeholder='First Name'
                                className='infoInput'
                                name='firstname'
                                onChange={(e) => handleChange(e)}
                                value={data.firstname}
                            />
                            <input
                                type="text"
                                placeholder='Last Name'
                                className='infoInput'
                                name='lastname'
                                onChange={(e) => handleChange(e)}
                                value={data.lastname}
                            />
                        </div>
                    )}
                    <div>
                        <input
                            type="text"
                            placeholder='Username'
                            className='infoInput'
                            name='username'
                            onChange={(e) => handleChange(e)}
                            value={data.username}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder='password'
                            className='infoInput'
                            name='password'
                            onChange={(e) => handleChange(e)}
                            value={data.password}
                        />
                        {isSignUp && (
                            <input
                                type="password"
                                placeholder='Confirm password'
                                className='infoInput'
                                name='confirmpass'
                                onChange={(e) => handleChange(e)}
                                value={data.confirmpass}
                            />)}
                    </div>
                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
                        * Confirm Password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: "15px", cursor: "pointer" }} onClick={() => { setIsSignUp((prep) => !prep); resetForm() }}  >
                            {isSignUp ?
                                "Already have an account. Login !" : "Don't have an account. Sign Up !"}
                        </span>
                    </div>
                    <button className='button infoButton' type='submit' onClick={handleSubmit} disabled={loading}>
                        {loading?"Loading...":isSignUp ? "Sign Up" : "Sign In"}
                    </button>

                </form>
            </div>
        </div>
    )
}




// function SignUp() {
//     return (
//         <div className='a-right'>
//             <form className='infoForm authForm'>
//                 <h3>Sign Up</h3>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder='First Name'
//                         className='infoInput'
//                         name='firstname'
//                     />
//                     <input
//                         type="text"
//                         placeholder='Last Name'
//                         className='infoInput'
//                         name='Lastname'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder='Username'
//                         className='infoInput'
//                         name='username'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="password"
//                         placeholder='password'
//                         className='infoInput'
//                         name='username'
//                     />
//                     <input
//                         type="password"
//                         placeholder='Confirm password'
//                         className='infoInput'
//                         name='confirmpass'
//                     />
//                 </div>
//                 <div>
//                     <span style={{fontSize:"15px"}}>Already have an account. Login ! </span>
//                 </div>
//                 <button className='button infoButton' type='submit'>Signup</button>

//             </form>
//         </div>
//     )
// }

export default Auth