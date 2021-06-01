import React from 'react'
import Button from '../../components/button'
import QuestionBox from '../../components/questionBox'
import Input from '../../components/input'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';


const Page1 = ()=>{
    const pergunta1 = useStoreState(state => state.form.pergunta1)
    const inputValue = useStoreState(state=> state.form.inputValue)
    const setPergunta1 = useStoreActions(action=> action.form.modifyPergunta1)
    const setInputValue = useStoreActions(action=> action.form.modifyInput)


    function handleButton(){
        console.log('Próxima Página')
    }

    return(
        <div className='pagina1'>
            <h1>Site para pesquisa</h1>
            <Input labelInput='Nome' inputValue={inputValue} setInputValue={setInputValue}/>
            <QuestionBox pergunta='Qual o nome da sua mãe?' context={pergunta1} setContext={setPergunta1}/>
            <Link to='/page2'>
                <Button tipo='button' nome='Próxima Página' handleButton={handleButton}/>
            </Link>
            
        </div>
    )
}

export default Page1