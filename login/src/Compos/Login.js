import React from 'react'
import { useDispatch } from 'react-redux';






import {login,logout} from "../features/user";
function Login() {
    const dispatch = useDispatch();
    return (
        <div className="ParentClcks">
            <button onClick={() => {dispatch(login({name : "3bdallah",age : 23 , email: "3bdallah.dev@gmail.com"}));
            }}>Login</button>
             <button onClick={() => {dispatch(logout({name : "",age : 0 , email: ""}));
            }}>LogOut</button>
        </div>
    )
}

export default Login
