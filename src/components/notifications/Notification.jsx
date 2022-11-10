import style from './notification.module.css'

export default function Notification(props){

    return(
        <div className={style.notificationbox}>
            <div>
                <h4>new release</h4>
                <ul className={style.lists}>
                    <li className={style.list}>
                        <img src={props.img} width='100' height='60' alt=''/>
                        <span>
                            <div className={style.movieTitle}>god of war</div>
                            <small> 25th nov. 2023</small>
                        </span>
                    </li>
                    <li className={style.list}>
                        <img src={props.img} width='100' height='60' alt=''/>
                        <span>
                            <div className={style.movieTitle}>See season3</div>
                            <small> 25th nov. 2023</small>
                        </span>
                    </li>
                    <li className={style.list}>
                        <img src={props.img} width='100' height='60' alt=''/>
                        <span>
                            <div className={style.movieTitle}>no man's land</div>
                            <small> 25th nov. 2023</small>
                        </span>
                    </li>
                    
                </ul>
                <div>
                    <h4>recently saved</h4>
                <ul className={style.lists}>
                    <li className={style.list}>
                        <img src={props.img} width='100' height='60' alt=''/>
                        <span>
                            <div className={style.movieTitle}>god of war</div>
                            <small> 25th nov. 2023</small>
                        </span>
                    </li>
                    <li className={style.list}>
                        <img src={props.img} width='100' height='60' alt=''/>
                        <span>
                            <div className={style.movieTitle}>See season3</div>
                            <small> 25th nov. 2023</small>
                        </span>
                    </li>
                    <li className={style.list}>
                        <img src={props.img} width='100' height='60' alt=''/>
                        <span>
                            <div className={style.movieTitle}>no man's land</div>
                            <small> 25th nov. 2023</small>
                        </span>
                    </li>
                    
                </ul>
                </div>
            </div>
        </div>



    )
}


