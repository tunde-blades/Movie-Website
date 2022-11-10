import { Link } from 'react-router-dom'
import style from './profile.module.css'


export default function Profile(){

    return(
        <ul className={style.navs}>
            <li className={style.list}>
                <Link className={style.homenav} to='/'>View Profile</Link>
            </li>
            <li className={style.list}>
                <Link className={style.addnav} to='/addfriend'>Subscriptions</Link>
            </li >
            <li className={style.list}>
                <Link className={style.videonav} to='/videos'>channels</Link>
            </li>
            <li className={style.list}>
                <Link className={style.notifynav} to='/notify'>log out</Link>
            </li>
        </ul>
    )
}