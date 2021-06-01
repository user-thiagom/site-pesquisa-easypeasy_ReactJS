import React from 'react'
/* import {usePesquisa} from '../../context/pesquisa' */

const QuestionBox = ({pergunta, context, setContext}) => {

    function handleChange(event){
        const copyContext = Object.assign({},context)
        copyContext.pergunta = pergunta
        copyContext.resposta = event.target.value
        setContext(copyContext)
    }

    return(
        <div>
            <label>{pergunta}</label><br/>
            <textarea value={context.resposta} onChange={handleChange}></textarea>
        </div>
    )
}

export default QuestionBox