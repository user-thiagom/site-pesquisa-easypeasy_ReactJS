import React from 'react'
import QuestionBoxRadio from '../../components/questionBoxRadio'
import QuestionBox from '../../components/questionBox'
import If from '../../components/if'
import Button from '../../components/button'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';


const Page2 = ()=>{
    const pergunta2 = useStoreState(state => state.form.pergunta2)
    const pergunta3 = useStoreState(state => state.form.pergunta3)
    const pergunta4 = useStoreState(state => state.form.pergunta4)
    const setPergunta2 = useStoreActions(action=> action.form.modifyPergunta2)
    const setPergunta3 = useStoreActions(action=> action.form.modifyPergunta3)
    const setPergunta4 = useStoreActions(action=> action.form.modifyPergunta4)

    function handleNextButton(){
        console.log('Próxima Página')
    }

    function handlePreviousButton(){
        console.log('Página Anterior!')
    }

    return(
        <div className='pagina2'>
            <QuestionBoxRadio pergunta='Você mora no Brasil?' opcoes={['Sim', 'Não']} context={pergunta2} setContext={setPergunta2}/>
            <If test={pergunta2.resposta === 'Sim'}>
                <QuestionBox pergunta='Qual a sua opinião sobre a primeira revolução industrial?' context={pergunta3} setContext={setPergunta3}/>
            </If>

            <If test={pergunta2.resposta === 'Não'}>
                <QuestionBox pergunta='Então está esperando o que para se mudar?' context={pergunta4} setContext={setPergunta4}/>
            </If>

            <Link to='/page3'>
                <Button tipo='button' nome='Próxima página' handleButton={handleNextButton}/>
            </Link>

            <Link to='/page1'>
                <Button tipo='button' nome='Voltar página' handleButton={handlePreviousButton}/>
            </Link>
            
            
        </div>
    )
}

export default Page2