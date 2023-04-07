import React from 'react'

function register() {
    return (
        <div>

            <div className='formContainer' >

                <div className='formWrapper text-center bg-white p-3'>
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