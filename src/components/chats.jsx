import React from 'react'
import Profile from './profile'

function chats() {
    const a = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 40 }
    ];
    const chatList = a.map(x => (<Profile name={x.name} msg={x.age} />))

    return (
        <div>
            {chatList}
        </div>
    )
}

export default chats