import React, { useState } from 'react'
import { create } from 'zustand'
import { handleUserMessage } from './handleUserMessage'

const checkIAMessage = (set, IAMessage) => {
  const searchParams = new URLSearchParams(window.location.search);
  const message = searchParams.get('message')
  if (IAMessage) return false // Si ya hay un mensaje mostrandose en IA, entonces no se muestra otro
  if (message) {
    handleUserMessage(message, set)
  }
}

const setIAMessage = (message, options, set) => {
  set({ IAMessage: message })
}

const middleHandleUserMessage = (message, set, options) => {
  if (message === 'hideIA') {
    set('isVisible', false)
    return
  } else {
    handleUserMessage(message, set, options)
  }
}

export const useIAStore = create((set, get) => ({
  containerHeight: "210px",
  IAOptions: <></>,
  isVisible: false,
  IAMessage: null,
  IAExpression: 'happy',
  IAHTMLMessage: null,
  numberChosen: null,
  handleUserMessage: (message, options) => middleHandleUserMessage(message, set, options),
  setIAMessage: (message, options) => setIAMessage(message, options, set),
  setIAOptions: (options) => set({ IAOptions: options }),
  setIsvisible: (isVisible) => set({ isVisible: isVisible }),
  setnumberChosen: (numberChosen) => set({ numberChosen: numberChosen }),
  checkIAMessage: (IAMessage) => checkIAMessage(set, IAMessage),
}))
