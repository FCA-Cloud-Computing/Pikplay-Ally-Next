import React, { useState, useEffect } from 'react'
import Button from '../../../button/Button'

async function getContacts(handleUserMessage, set) {
  const props = ["name", "email", "tel", "address", "icon"];
  const opts = { multiple: true };
  try {
    const contacts = await navigator.contacts.select(props, opts);
    const formattedContacts = contacts.map(item => ({
      name: item.name[0],
      phone: item.tel[0].replace(/ /g, "")
    }))
  } catch (ex) {
  }
}

const HTML = <></>

const Message = `Con cada referido ganas Pikcoins. <br /><br />
Recuerdale a tus referidos aceptar la invitacion enviada por wsp ó por mensaje de texto.`
const Options = ({ handleUserMessage, set }) => {
  return <>
    <Button color='blue' realistic onClick={() => getContacts(handleUserMessage, set)}>
      Agregar referidos y ganar Pikcoins 🎉
    </Button>
    {/* <Link href='/perfil'>
      <Button color='yellow' realistic>
        Ver premios por completar Onboarding
      </Button>
    </Link> */}
  </>
}

export {
  HTML,
  Message,
  Options,
}
