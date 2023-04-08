import React from 'react'
import Input from './input'
import Msg from './msg'

function messages() {
    return (
        <div className='bg-[#379683] h-[90vh] rounded-md flex justify-between flex-col' >
            <div className='whitespace-nowrap overflow-auto scrollbar-hide '>
                <Msg />
                <Msg />
                <Msg />
                <Msg />
                <Msg />
                <Msg /><Msg />
                <Msg />
                <Msg /><Msg />
                <Msg />
                <Msg />
            </div>
            <Input />

        </div>
    )
}

export default messages