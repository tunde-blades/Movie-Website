import Notification from '../../components/notifications/Notification'
import style from '../header/header.module.css'
// import Data from '../../data/Data'
// import Uploads from '../../data/Uploads'
//import $ from 'jquery'
import { FaBell, FaBars, FaSearch, FaViadeo} from "react-icons/fa"
import { useState } from 'react'
import Profile from '../../components/profile/Profile'
import Sidebar from '../sidebar/Sidebar'
import Backdrop from '../../components/backdrop/Backdrop'




export default function Header(props){

    const [showProfile, setShowProfile] = useState(false);
    function profileDetails() {
        setShowProfile(true)
        !showProfile?setShowProfile(true):setShowProfile(false)
    }

    const [showSidebar, setShowsidebar]= useState(false);
    function displaySidebar(){
        setShowsidebar(true)
    }
    const [showNotification, setShowNotification] = useState(false)
    
function displayNotification(){
    !showNotification ?setShowNotification(true):setShowNotification(false)
}
    function close(){
        setShowsidebar(false)
        setShowProfile(false)
        setShowNotification(false)
    }

  return (
    <header className={style.head1}>
        <div></div>
        <div className={style.headernav}>
            <div className={style.headbox1}>
                <div onClick={displaySidebar} className={style.sidebarIcon}>
                    <FaBars/> 
                </div>
                <div className={style.logo}>
                    <FaViadeo/>
                </div>
                <div className={style.searchbox}>
                    <FaSearch className={style.searchicon}/>
                    <input type='text' placeholder='Search a movie...'/>
                </div>
            </div>
            <div className={style.headbox2}>
                <div onClick={profileDetails}  className={style.profilebox}>
                    <div className={style.profile}>
                        <picture className={style.image}><img src={props.img} alt=""/>
                        </picture>
                        <div className={style.details}>
                            <h4>{props.name}</h4>
                            <small>admistration</small>
                        </div>
                    </div>
                </div>
                <div className={style.notifyMessage}>
                    <span id='noti' className={style.notification} onClick={displayNotification}>
                        <FaBell/>
                    </span>
                    <span className={style.message}>

                    </span>
                </div>
                
            </div>
            {showProfile && <Profile/>}
            {showSidebar && <Backdrop onClick={close}/>}
            {showSidebar && <Sidebar/>}
            {showNotification && <Notification/>}
        </div>
    </header>
  )
  

}
// $(document).ready(function(){

//desktop dropdown
//     $('#notification').mouseenter(function(){
//         $('#notification').css('width', '500px');
//     });
//     $('.notification').mouseleave(function(){
//         $(Notification).slideUp(500);
//     })

       
// })

