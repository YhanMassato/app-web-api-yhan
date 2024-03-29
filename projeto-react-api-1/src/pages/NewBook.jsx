import Input from '../components/Form/Input'

import styles from './style-pages/NewBook.module.css'

export default function NewBook(){

    
    return(
        <section className={styles.newBook_container}>
            <h1>Nova página de cadastro de livro</h1>

            <form>
                <Input 
                    type="text"
                    name="nome_livro"
                    id="nome_livro"
                    placeholder="digite o titulo do livro"
                    text="digite o titulo do livro"
                />

                <Input 
                    type="text"
                    name="nome_autor"
                    id="nome_autor"
                    placeholder="digite o titulo do autor"
                    text="digite o titulo do autor"
                />

                <Input 
                    type="text"
                    name="descricao_livro"
                    id="descricao_livro"
                    placeholder="digite a descricao do livro"
                    text="digite a descricao do livro"
                />
            </form>

        </section>
    )
}