import React from 'react'

function navbar() {
    return (
        <div className='bg-[#379683] rounded-md h-10 flex p-2 space-x-7 text-[#edf5e1]'>
            <div className='pr-24 '>Chat App</div>
            <div className='flex space-x-6 '>
                <div ><img src="http://ecap.pace.ac.in//StudentPhotos/21kq1a0545.jpg" alt='img' className=' h-[22px] object-contain '></img></div>
                <div >maxemus</div>
                <div className='border w-18 px-1 rounded-md bg-red-500 '><button onMouseOver={() => { alert("hhi") }}>Logout</button></div>
            </div>
        </div>
    )
}

export default navbar