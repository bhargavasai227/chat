import React from 'react'

function msg() {
    const time = new Date().toLocaleTimeString('en-GB', {
        hour: "numeric",
        minute: "numeric"
    });
    return (
        <div className='bg-[#8ee4af] mx-3 mb-2 flex justify-between px-3 rounded-md'>
            <div>
                <img src='http://ecap.pace.ac.in//StudentPhotos/21kq1a0545.jpg' alt='dp' className=' h-8'></img>
                <p className='text-xs'>{time}</p>
            </div>
            <div className='pr-3' key="hi">message</div>
        </div>
    )
}

export default msg