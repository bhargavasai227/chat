import React from 'react'

function msgUpload(e) {
    e.preventDefault();
    alert(e.target[0].value)

}
function input() {
    return (
        <form onSubmit={msgUpload}>
        <div className='flex justify-between p-2'>

            <input type='text' placeholder='message' className='w-[95%] '></input>
                <button type='submit' className='border bg-slate-300 rounded-lg'>send</button>

        </div>
        </form>
    )
}

export default input