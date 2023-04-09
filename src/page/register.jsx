import React from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
function create(e) {
    e.preventDefault()
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("signed in ");
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);

        });
    updateProfile(auth.currentUser, {
        displayName: name,
    }).then(() => {
        console.log(auth.currentUser);

    }).catch((error) => {

    });

}

function register() {
    return (
        <div>

            <div className='formContainer' >

                <div className='formWrapper text-center bg-white p-3 ' onSubmit={create}>
                    <h1 >Register</h1>
                    <form className='flex flex-col gap-5 '>
                        <input type="text" placeholder='name' />
                        <input type="email" placeholder='email' />
                        <input type="password" placeholder='password' />
                        <input type='submit' value='sineup' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default register