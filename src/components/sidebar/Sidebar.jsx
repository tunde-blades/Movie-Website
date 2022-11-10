import style from './sidebar.module.css'
import Profile from '../../../components/profile/Profile'
import { FaSortDown, FaSalesforce, FaMonero, FaHeart, FaAlgolia, FaBuyNLarge, FaViadeo } from 'react-icons/fa'
import { useState } from 'react'

export default function Sidebar (props){
    const [showProfile, setShowProfile] = useState(false)
    function displayProfile(){
        if (!showProfile) {
            setShowProfile(true)
        }
        else{
            setShowProfile(false)
        }
    }

    return(
        <div className={style.sidebar}>
            <div className={style.logo}><FaViadeo/></div>
            <div className ={style.profile}>
                <div onClick={displayProfile} className={style.profileDetails}>
                    <img className={style.image} src ={props.img}/>
                    <div>
                        <div>Tunde Blades</div>
                        <div>admistration</div>
                    </div>
                </div>
                <div className={style.profileDropdown}>
                    {showProfile && <Profile/>}
                </div>
            </div>
            <div className={style.sidebarContainer}>
                <div className={style.dashboard}>
                    Dashboard
                </div>
                <ul className={style.lists}>
                    <li className={style.list}>
                        <div className={style.listbox}><FaBuyNLarge/><p className={style.listtext}>Subscriptions</p>
                        </div><FaSortDown/>
                    </li>
                    <li className={style.list}>
                        <div className={style.listbox}><FaAlgolia/><p className={style.listtext}>top plays</p>
                        </div><FaSortDown/>
                    </li>
                    <li className={style.list}>
                        <div className={style.listbox}><FaHeart/><p className={style.listtext}>favorites</p>
                        </div><FaSortDown/>
                    </li>
                    <li className={style.list}>
                        <div className={style.listbox}><FaSalesforce/><p className={style.listtext}>seasonals</p>
                        </div><FaSortDown/>
                    </li>
                    <li className={style.list}>
                        <div className={style.listbox}><FaMonero/><p className={style.listtext}>more</p>
                        </div><FaSortDown/>
                    </li>
                    
                </ul>
            </div>
        </div>


    )


}