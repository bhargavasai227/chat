import React from 'react'
import Navbar from './navbar'
import Search from './search'
import Chats from './chats'

export default function sidebar() {
    return (
        <div className='side rounded-md'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}
