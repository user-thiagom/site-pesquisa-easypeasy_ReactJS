import React from 'react'
/* import {usePesquisa} from '../../context/pesquisa' */

const Input = ({labelInput, inputValue, setInputValue}) => {
    function handleChange (event){
        setInputValue(event.target.value)
    }

    return(
        <div>
            <label>{labelInput}:</label>
            <input type='text' value={inputValue} onChange={handleChange}/>
        </div>
    )
}

export default Input