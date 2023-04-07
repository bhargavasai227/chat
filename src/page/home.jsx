import React from 'react'
import Sidebar from '../components/sidebar'
import Chat from '../components/chat'

function home() {
    return (
        <div>
            <div className='container'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default home