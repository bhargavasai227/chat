import React from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';



function Navbar() {
    let navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [signout] = useSignOut(auth);
    return (
        (
            user &&

        <div className='bg-[#379683] rounded-md h-10 flex p-2 space-x-7 text-[#edf5e1]'>
            <div className='pr-24 '>Chat App</div>
            <div className='flex space-x-6 '>
                        <div ><img src={user.photoURL} alt='img' className=' h-[22px] object-contain '></img></div>
                        <div >{user.displayName}</div>
                        <div className='border w-18 px-1 rounded-md bg-red-500 '><button onClick={async () => { await signout(); navigate("/login") }}>Logout</button></div>
            </div>
            </div>)
    )
}

export default Navbar