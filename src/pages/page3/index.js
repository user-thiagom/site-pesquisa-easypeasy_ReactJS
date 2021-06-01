import React from 'react'

import QuestionBoxSelection from '../../components/questionBoxSelection'
import Button from '../../components/button'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';


const Page3 = ()=>{
    const pergunta5 = useStoreState(state => state.form.pergunta5)
    const setPergunta5 = useStoreActions(action=> action.form.modifyPergunta5)

    function handleNextButton(){
        console.log('Próxima Página')
    }

    function handlePreviousButton(){
        console.log('Página Anterior')
    }

    return(
        <div className='pagina3'>
            <QuestionBoxSelection pergunta='Qual o seu suco de fruta favorito?' context={pergunta5} setContext={setPergunta5} options={['Cajá','Maracujá','Pitanga','Abacaxi','Laranja']}/>
            <Link to='/page4'>
                <Button tipo='button' nome='Finalizar' handleButton={handleNextButton}/>
            </Link>

            <Link to='/page2'>
                <Button tipo='button' nome='Voltar página' handleButton={handlePreviousButton}/>
            </Link>
        </div>
    )
}

export default Page3