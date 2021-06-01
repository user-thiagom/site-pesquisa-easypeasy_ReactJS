import React from 'react'

import Button from '../../components/button'
import If from '../../components/if'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';


const Page4 = ()=>{
    const pergunta1 = useStoreState(state => state.form.pergunta1)
    const pergunta2 = useStoreState(state => state.form.pergunta2)
    const pergunta3 = useStoreState(state => state.form.pergunta3)
    const pergunta4 = useStoreState(state => state.form.pergunta4)
    const pergunta5 = useStoreState(state => state.form.pergunta5)
    const inputValue = useStoreState(state=> state.form.inputValue)
    const reset = useStoreActions(action=> action.form.resetPerguntas)

    function handleNewButton(){
        console.log('Próxima Página')
        reset()
    }

    return(
        <div className='pagina4'>
            <h2>Resposta do formulário</h2>
            <div className='repostas'>
                <h4>Nome</h4>
                <p>{inputValue}</p>
                <h4>{pergunta1.pergunta}</h4>
                <p>{pergunta1.resposta}</p>
                <h4>{pergunta2.pergunta}</h4>
                <p>{pergunta2.resposta}</p>
                <If test={pergunta2.resposta === 'Sim'}>
                    <h4>{pergunta3.pergunta}</h4>
                    <p>{pergunta3.resposta}</p>
                </If>
                <If test={pergunta2.resposta === 'Não'}>
                    <h4>{pergunta4.pergunta}</h4>
                    <p>{pergunta4.resposta}</p>
                </If>
                <h4>{pergunta5.pergunta}</h4>
                <p>{pergunta5.resposta}</p>
            </div>
            <Link to='/'>
                <Button tipo='button' nome='Nova Pesquisa' handleButton={handleNewButton}/>
            </Link>
        </div>
    )
}

export default Page4