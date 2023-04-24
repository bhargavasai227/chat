import React, { useContext } from 'react'
import { UserData } from '../context/authContext';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Chatnavt() {
    const user = useContext(UserData)
    return (
        <div className='chat rounded-md'>
            <div className='w-full bg-[#05386b] h-10 rounded-md p-3 text-white flex justify-between gap-[3rem] ' >
                <div>{user.displayName}</div>
                <div className='flex gap-10'>
                    <CallIcon />
                    <SmsIcon />
                    <MoreVertIcon />
                </div>
            </div>
        </div>
    )
}

export default Chatnavt