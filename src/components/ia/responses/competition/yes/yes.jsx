import React from 'react';
import Button from '../../../../button/Button'
import Image from 'next/image';
import { WhatsApp } from '@mui/icons-material';

const Message = `Ahora estas participando!, Ahora lo que sigue es pagar tu boleta y como dijo la chancera "Mucha suerte!!!"`

const handleTalkToOwner = (sellerPhone, number) => {
    const message = `Hola, me gustaría reservar el número ${number} del concurso https://pikplay.co/competition/1234`
    const url = `https://api.whatsapp.com/send?phone=${sellerPhone}&text=${message}`
    window.open(url, '_blank').focus();
}

const HTMLMessage = <center>
    <Image src='/images/icons/gracias-cupo-blue-panther.webp' width={120} height={120} />
</center>

const whastappStyles = { margin: '0 4px 0 4px', width: '20px' }

const Options = ({ handleUserMessage, set, options }) => {
    const { sellerPhone, number } = options
    return <>
        <Button shine color='blue' onClick={() => handleTalkToOwner(sellerPhone, number)}>
            &nbsp;Pagar mi boleta&nbsp;<WhatsApp styles={whastappStyles} />
        </Button>
        <Button color='transparent' onClick={() => handleUserMessage('inicio', set)}>
            ¿Tienes alguna otra duda?
        </Button>
    </>
}

export {
    Message,
    Options,
    HTMLMessage,
}
