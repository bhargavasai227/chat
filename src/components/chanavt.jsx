import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function chatnavt() {
    return (
        <div className='chat rounded-md'>
            <div className='w-full bg-[#05386b] h-10 rounded-md p-3 text-white flex justify-between gap-[3rem] ' >
                <div>usename</div>
                <div className='flex gap-10'>
                    <CallIcon />
                    <SmsIcon />
                    <MoreVertIcon />
                </div>
            </div>
        </div>
    )
}

export default chatnavt