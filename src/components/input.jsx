import React from 'react'

function input() {
    return (
        <div className='flex justify-between p-2'>
            <input type='text' placeholder='message' className='w-[95%] '></input>
            <button className='border bg-slate-300' onClick={() => { alert("clicked") }}>send</button>
        </div>
    )
}

export default input