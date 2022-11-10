import { Link } from 'react-router-dom'
import { FaHeart, FaHome, FaNewspaper, FaSquareFull } from "react-icons/fa"
import style from './Subheader.module.css'

export default function Subheader(){
    return(
        <section>
            <div className={style.head2}>
                <ul className={style.navs}>
                        <li>
                            <Link className={style.dashboard} to='/'><FaHome/> dashboard</Link>
                        </li>
                        <li>
                            <Link className={style.newMovies} to='/new/movies'><FaNewspaper/> new movies</Link>
                        </li>
                        <li>
                            <Link className={style.series} to='/series'><FaSquareFull/> series</Link>
                        </li>
                        <li>
                            <Link className={style.favorites} to='/favorites'><FaHeart/> favorites</Link>
                        </li>
                    </ul>
            </div>
        </section>
    )
}