
import Sidebar from '../components/sidebar'
import Chat from '../components/chat'
// import { useNavigate } from "react-router-dom";
import { UserData } from '../context/authContext'
import { useContext } from 'react'

function Home() {
    // let nav = useNavigate();
    const user = useContext(UserData);

    // useEffect(() => {

    //     if (user === {} || null) {
    //         console.log("hi");
    //         nav("/login")
    //     }
    // }, [user, nav])

    return (

        <div className='home'>
            {user &&

            <div className='container'>
                <Sidebar />
                <Chat />

                </div>}
            {!user && <u><a href="/login">login</a></u>}
        </div>
    )


}

export default Home