import React from 'react'
/* import {usePesquisa} from '../../context/pesquisa' */

const QuestionBoxSelection = ({pergunta, context, setContext, options}) => {
    const showOptions = options.map((elemento)=>
        <>
            <option value={elemento}>{elemento}</option>
        </>
    )

    function handleChange(event){
        const copyContext = Object.assign({},context)
        copyContext.pergunta = pergunta
        copyContext.resposta = event.target.value
        setContext(copyContext)
    }

    return(
        <div className='question-selection'>
            <label>{pergunta}
                <select value={context.resposta} onChange={handleChange}>
                    {showOptions}
                </select>
            </label><br/>
        </div>
    )
}

export default QuestionBoxSelection