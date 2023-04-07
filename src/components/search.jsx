import React from 'react'

function search() {
    return (
        <div className='search text-[#edf5e1]'>
            <div className='inputsearch'><input type='text' className='bg-transparent border border-[#5CDB9] w-[95%] m-1 text-center  ' placeholder='search'></input></div>
            <div className='searchoutput'></div>

        </div>
    )
}

export default search