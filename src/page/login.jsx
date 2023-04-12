import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";


function loginCheck(e) {

    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

        })

}


function Login() {
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    if (user) {
        navigate("/");
    }


    return (
        <div className='formContainer'>
            {!user ?
            <div className='formWrapper bg-white p-3' >
                <form className='flex flex-col gap-5' onSubmit={loginCheck} >
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type='submit' />
                </form>
                <div className='flex justify-between'>
                    <a href='https://github.com/bhargavasai227/' className='mx-3'>github profile</a>
                    <u><a href='/register' className='mx-3'>no account?</a></u>
                    </div>
                </div> : <div>loadinf</div>}
        </div>
    )
}

export default Login