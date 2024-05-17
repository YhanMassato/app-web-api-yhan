import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./style-pages/BookEdit.module.css"
import Input from "../components/Form/Input"
import Select from "../components/Form/Select"

export default function BookEdit(params){
    
    const [book, setBook] = useState({})
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/books/${id}`,{
            method : 'GET',
            headers: {
                'content-type':'application/json'
        },
        })
        .then((resp) => resp.json())
        .then((data) => {setBook(data); console.log(data)})
        .catch((err) => {console.log(err)})
},[]);

    useEffect(() => {

        fetch('http://localhost:5000/categories',
        {
            method:'GET',
            headers:{'Content-Type' : 'application/json'}
        })
        .then(
            (resp)=>resp.json()
            )
        .then(
            (data) => {
                setCategories(data)
                console.log(data)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )}, [])

    const {id} = useParams()
    console.log(id)

    function handlerChangerBook(event){
        setBook({...book, [event.target.name] : event.target.value})
        console.log(book)
    }

    function handlerChangerCategory(event){
        setBook({...book, category:{
            id: event.target.name,
            category: event.target.options[event.target.selectedIndex].text
        }})
        console.log(book)
    }

    return(
        <div className={styles.book_container}>
            <h1>Edição de livro</h1>

            <form>
                <Input 
                    type="text"
                    id="nome_livro"
                    name="nome_livro"
                    placeholder="Titulo do Livro:"
                    text=""
                    value={book.nome_livro}
                    handlerOnChange={handlerChangerBook}
                />

                <Input 
                    type="text"
                    name="nome_autor"
                    id="nome_autor"
                    placeholder="digite o titulo do autor"
                    text=""
                    value={book.nome_autor}                    
                    handlerOnChange={handlerChangerBook}
                />

                <Input 
                    type="text"
                    name="descricao_livro"
                    id="descricao_livro"
                    placeholder="digite a descricao do livro"
                    text="digite a descricao do livro"
                    value={book.descricao_livro}
                    handlerOnChange={handlerChangerBook}
                /> 

                <Select
                    handlerOnChange={handlerChangerCategory}
                    name="categoria_id"
                    text="selecione a categoria do livro"
                    options={categories}
                    // value={book.category.category}
                />


            </form>
        </div>
    )
}