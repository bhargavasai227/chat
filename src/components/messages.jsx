import React from 'react'
import Input from './input'
import Msg from './msg'

function messages() {
    return (
        <div className='bg-[#379683] h-[90vh] rounded-md flex justify-between flex-col' >
            <div>
                <Msg />
                <Msg />
                <Msg />
            </div>
            <Input />

        </div>
    )
}

export default messages