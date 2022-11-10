import style from './backdrop.module.css'
export default function Backdrop(props){


    return(
        <div onClick={props.onClick} className={style.backdrop}></div>
    )
}