import styles from './Input.module.css'

export default function Input({type, text, name, placeholder, handlerOnChange, value}){
    return(

        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <input
                type={type}
                id={name}
                placeholder={placeholder}
                onChange={handlerOnChange}
                value={value}
            />
        </div>

    )
}