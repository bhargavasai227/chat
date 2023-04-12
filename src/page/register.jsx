import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile, } from 'firebase/auth'
async function create(e) {
    e.preventDefault()
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("signed in ");
            updateProfile(auth.currentUser, {
                displayName: e.target[0].value,
                photoURL: `https://ui-avatars.com/api/?name=${name}`

            }).then(() => {
                console.log(auth.currentUser.photoURL);
                console.log(auth.currentUser);

            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
            });

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);

        });


}

function Register() {
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    if (user) {
        navigate("/");
    }

    return (
        <div>

            <div className='formContainer' >
                {!user ?
                <div className='formWrapper text-center bg-white p-3 ' onSubmit={create}>
                    <h1 >Register</h1>
                    <form className='flex flex-col gap-5 '>
                        <input type="text" placeholder='name' />
                        <input type="email" placeholder='email' />
                        <input type="password" placeholder='password' />
                        <input type='submit' value='sineup' />
                    </form>
                    </div> : <div>loadinf</div>}
            </div>
        </div>
    )
}

export default Register