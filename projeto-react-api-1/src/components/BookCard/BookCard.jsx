import styles from "./BookCard.module.css"

export default function BookCard({id, livro, autor, categoria, handlerRemove}){

    const remove = (event) =>{
        event.preventDefault();
        handlerRemove(id)
    }

    return(
        <div id={id} className={styles.book_card}>
            <h4>{livro}</h4>

            <p>Autor:{autor}</p>

            <p className={styles.category_text}>
                <span></span>{categoria}
            </p>

            <div className={styles.book_card_actions}>
                <button onClick={remove}>Excluir</button>
            </div>
        
        </div>
    )
}