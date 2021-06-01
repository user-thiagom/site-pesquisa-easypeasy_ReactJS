import React from 'react'

const Button = ({tipo, nome, handleButton}) => {
    return(
        <div>
            <button type={tipo} name={nome} onClick={handleButton}>{nome}</button>
        </div>
    )
}

export default Button