import React from 'react';
import Button from '../../../button/Button'
import useCompetitions from '../../../competitions/hooks/useCompetitions';
import { DoneAll } from '@mui/icons-material';
import { DeleteOutlined } from '@mui/icons-material';

const Message = ({ number }) => {
  return ``
}

const Options = ({ handleUserMessage, set, options }) => {
  const { liberarNumero } = useCompetitions();
  return <>
    <Button color='blue'>
      <DoneAll className='icon' />
      &nbsp;Marcar como pagado
    </Button>
    <Button color='red' onClick={() => {
      liberarNumero()
      handleUserMessage('hideIA', set)
    }}>
      <DeleteOutlined className='icon' />
      &nbsp;Liberar número
    </Button>
  </>
}

export {
  Message,
  Options,
}
