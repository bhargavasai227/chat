import React from 'react'

function login() {
    return (
        <div className='formContainer'>
            <div className='formWrapper bg-white p-3' >
                <form className='flex flex-col gap-5'>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type='submit' />
                </form>
            </div>
        </div>
    )
}

export default login