import React from 'react';
import Button from '../../../../button/Button'

const Message = `Número tomado, lo sentimos :(<br />Tabla de números actualizada!.`

const Options = ({ handleUserMessage, set, options }) => {
    return <>
        <Button color='blue'>
            Cerrar
        </Button>
        <Button color='transparent' onClick={() => handleUserMessage('inicio', set)}>
            Volver al inicio
        </Button>
    </>
}

export {
    Message,
    Options,
}
