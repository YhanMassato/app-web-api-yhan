import styles from './Container.css'

export default function Container(props){
    return(
        <div className={`${styles.container} ${styles.min_height}`}>
            {props.children}
        </div>
    )
}