import React, { useState, useEffect } from 'react';
import Button from '../../../button/Button'

const HTMLOnboarding = () => {
  const inputStyle = {
    boxSizing: 'border-box',
    fontSize: '14px',
    padding: '5px 10px 10px',
    width: '100%',
    // fontStyle: 'italic'
  }

  return <div>
    <input id="inptOnboardingName" style={inputStyle} placeholder="Escríbe aquí tu nombre" />
  </div>
}

const Message = `Hola! es un placer tenerte acá, vamos a comenzar, como puedo llamarte?`
const Options = ({ handleUserMessage, set }) => {
  const handleSaveName = () => {
    const name = document.getElementById("inptOnboardingName").value
    localStorage.setItem("onboardingName", name)
  }

  return <>
    <Button realistic shine color='blue' onClick={() => {
      handleSaveName()
      handleUserMessage('onboarding/name-saved', set)
    }}>
      Seguir
    </Button>
  </>
}

const HTMLOnboardingNameSaved = () => {
  const onboardingName = localStorage.getItem('onboardingName')
  return `<p>Gracias por confiar en nosotros ${onboardingName}. </p>
  <p>👾 <b>Pikplay</b> es la plataforma con las que aliados comerciales, es decir, tiendas gamers y tecnologia en general ofrecen a sus compradoes beneficis como: cashback en sus compras, participar en concursos y etc.</p>
  <p>
  Todo esto lo hacemos con la creacion de un perfil para sus clientes. Estos perfiles iran subiendo de nivel 🆙 y obteniendo insignias.
  </p>
  <p>Ahora te explicaré que son los <b>Pikcoins</b></p>`
}

export {
  HTMLOnboarding,
  HTMLOnboardingNameSaved,
  Message,
  Options,
}
