import { useState, useEffect } from 'react'
import Container from '../components/Container/Container'
import Message from '../components/Message/message' 
import { useLocation } from 'react-router-dom'
import BookCard from '../components/BookCard/BookCard'
import styles from './style-pages/Book.module.css'


export default function Book(){

    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/books',{
            method : 'GET',
            headers: {
                'content-type':'application/json'
        },
        })
        .then((resp) => resp.json())
        .then((data) => {setBooks(data)})
        .catch((err) => {console.log(err)})
},[]);

    const location = useLocation();
    let message  = ''

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

            {
                books.map((book) =>(
                        <div key={book.id}>
                            <BookCard
                            id={book.id}
                            livro={book.nome_livro}
                            autor={book.nome_autor}
                            categoria={book.category.category}
                            />
                        </div>
                ))
            }
        </section>
        
    )
}