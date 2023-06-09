import React from 'react'

function profile(p) {
    return (
        <div>
            <div className='userchat flex space-x-6  w-full hover:bg-[rgba(11,20,92,0.74)] text-white'>
                <img src={`https://ui-avatars.com/api/?name=${p.name}`} alt='dp' className='w-5'></img>
                <div><b><h1>{p.name}</h1></b>
                    <p className='text-gray-100 '>{p.msg}</p></div>
            </div>
        </div>
    )
}

export default profile