import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

// Custom
import Button from '../../../button/Button'
import { saveReferralSrv } from '@/services/user/userService'

async function getContacts(handleUserMessage, set) {
  const props = ["name", "email", "tel", "address", "icon"]
  const opts = { multiple: true }
  try {
    const contacts = await navigator.contacts.select(props, opts)
    // const contacts = [{ name: ['Juan'], tel: ['+56912345678'] }] // For testing
    await Promise.all(
      contacts.map(async (item) => {
        const itemFormatted = {
          name: item.name[0],
          phone: item.tel[0].replace(/ /g, "")
        }
        await saveReferralSrv(null, itemFormatted)
      })
    )
    toast.success('¡Referidos guardados!')
  } catch (err) {
    toast.warning('No se pudo obtener los contactos, quizas ya los guardaste antes')
  }
}

const HTML = <></>

const Message = `Con cada referido ganas Pikcoins. <br /><br />
Recuerdale a tus referidos aceptar la invitacion enviada por wsp ó por mensaje de texto.`
const Options = ({ handleUserMessage, set }) => {
  return <>
    <Button color='blue' realistic onClick={() => getContacts(handleUserMessage, set)}>
      Agregar referidos y<br />
      ganar Pikcoins 🎉
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
