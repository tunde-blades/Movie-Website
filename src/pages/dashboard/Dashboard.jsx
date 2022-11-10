import Header from '../../layout/header/Header'
import Subheader from '../../layout/header/Subheader'
import style from './dashboard.module.css'
import { FaDownload, FaPlayCircle, FaShare } from 'react-icons/fa'
export default function Dashboard(props){
    return (
        <div className={style.dashboard}>
            <Header/>
            <Subheader/>
            <div className={style.nowPlaying}>

                <div className={style.vidimg}>
                    <img src={props.img} className={style.nowplayinyVid}/>
                    <FaPlayCircle className={style.playicon}/>
                </div>
                
                <div className={style.playDetails}>
                    <h3>IT BEGINS DUNC</h3>
                    <small>an action movie, that tells a story of a young powerful boy that was sent by his village ancesstors to ave them from oppressors

                    </small>
                    <span className={style.downshareicon}>
                    <FaDownload className={style.downloadicon}/>
                    <FaShare/>
                </span>
                </div>
                

            </div>
            <h3>New Release</h3>
            <h3>Seasonals</h3>
            <p>dashboard</p>
        </div>
    )
}