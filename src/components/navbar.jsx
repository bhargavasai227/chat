import React from 'react'

function navbar() {
    return (
        <div className='bg-[#8ee4af] rounded-md h-10 flex p-2 space-x-7'>
            <div className='pr-24 '>Chat App</div>
            <div className='flex space-x-6 '>
                <div className=' bg-slate-50'><img src="http://ecap.pace.ac.in//StudentPhotos/21kq1a0545.jpg" alt='img' className=' h-[22px] object-contain '></img></div>
                <div >maxemus</div>
                <div className='border w-18 px-1 border-[#05386b] rounded-md '><button onMouseOver={() => { alert("hhi") }}>Logout</button></div>
            </div>
        </div>
    )
}

export default navbar