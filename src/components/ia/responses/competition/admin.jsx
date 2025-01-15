import React from 'react';
import Button from '../../../button/Button';
import useCompetitions, { useCompetitionsStore } from '../../../competitions/hooks/useCompetitions';
import { DoneAll } from '@mui/icons-material';
import { DeleteOutlined } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Message = () => {
  return '';
};

const Options = ({ handleUserMessage, set, options }) => {
  const { liberarNumero, setPaidNumber } = useCompetitions();

  const habdleSendMessage = () => window.open('https://api.whatsapp.com/send?phone=573106614305', '_blank')

  return <>
    <Button color='blue' onClick={setPaidNumber}>
      <DoneAll className='icon' />
      &nbsp;Marcar como pagado
    </Button>
    <Button color='yellow' onClick={habdleSendMessage}>
      <WhatsAppIcon className='icon' />
      &nbsp;Enviar mensaje
    </Button>
    <Button color='red' onClick={() => {
      liberarNumero();
      handleUserMessage('hideIA', set);
    }}>
      <DeleteOutlined className='icon' />
      &nbsp;Liberar número
    </Button>
  </>;
};

export {
  Message,
  Options
};
