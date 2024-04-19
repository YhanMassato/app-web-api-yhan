
import Message from '../components/Message/message'
import styles from './style-pages/Book.module.css'
import { useLocation } from 'react-router-dom'

export default function Book(){
    const location = useLocation();
    let message  = ''

    console.log(location.state)

    if (location.state){
        message = location.state
    }

    return(
        <section className={styles.book_container}>
            <h1>LIVROS</h1>
            {
                message && <Message 
                    msg={message}
                    type="sucess"
                    />
            }
        </section>
        
    )
}