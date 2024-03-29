import styles from './Input.module.css'

export default function Input({type, id, text, name, placeholder, handlerOnChange, value}){
    return(

        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handlerOnChange}
                value={value}
            />
        </div>

    )
}