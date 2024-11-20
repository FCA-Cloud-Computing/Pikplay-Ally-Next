import React from 'react';
import Button from '../../button/Button'

const Message = `Que edad tiene la <span class='highlighted-2'>persona</span> a la cual le quieres dar el <span class='highlighted'>obsequio?</span>`
const Expresion = 'loved'
const Height = "160px"
const Options = (handleUserMessage, set) => {
    return <>
        <Button color='transparent'>
            Entre 10 y 15 años
        </Button>
        <Button color='transparent' onClick={() => handleUserMessage('regalo/10-15')}>
            Entre 15 y 18 años
        </Button>
        <Button color='transparent' onClick={() => handleUserMessage('')}>
            Más de 18 años
        </Button>
        <Button color='transparent' onClick={() => handleUserMessage('welcome')}>
            Volver al inicio
        </Button>
    </>
}

export {
    Height,
    Expresion,
    Message,
    Options,
}
