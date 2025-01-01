import React from 'react';
import Button from '../../../button/Button'
import Link from 'next/link';

const Message = `Los concursos son actividades que nuestros aliados realizan para afianzar su marca y premiar a los usuarios que participan. 
<br /><br />`

const Options = ({ handleUserMessage, set }) => {
    return <>
        <Button color='blue' onClick={() => set({ isVisible: false })}>
            <Link href="/concursos">
                Ver concursos activos
            </Link>
        </Button>
        <Button color='transparent' onClick={() => handleUserMessage('init', set)}>
            Volver al inicio
        </Button>
    </>
}

export {
    Message,
    Options,
}
