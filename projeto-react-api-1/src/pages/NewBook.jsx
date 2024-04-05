import { useState, useEffect } from 'react'
import Input from '../components/Form/Input'
import styles from './style-pages/NewBook.module.css'
import Select from '../components/Form/Select'


export default function NewBook(){


    const [categories, setCategories] = useState([]);


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
    
    return(
        <section className={styles.newBook_container}>
            <h1>Nova página de cadastro de livro</h1>

            <form>
                <Input 
                    type="text"
                    id="nome_livro"
                    placeholder="digite o titulo do livro"
                    text="digite o titulo do livro"
                />

                <Input 
                    type="text"
                    id="nome_autor"
                    placeholder="digite o titulo do autor"
                    text="digite o titulo do autor"
                />

                <Input 
                    type="text"
                    id="descricao_livro"
                    placeholder="digite a descricao do livro"
                    text="digite a descricao do livro"
                />

                <Select
                name="categoria_id"
                text="selecione a categoria do livro"
                option={categories}
                />

                <input 
                    type="submit"
                    value="cadastrar Livro"
                />
            </form>

        </section>
    )
}