/* eslint-disable react/jsx-key */
import styles from './competitions.module.scss'

import React, { useEffect, useState, useRef } from 'react'
import { Alert, Checkbox, Divider, FormControlLabel, List, ListItem, ListItemText, Tooltip } from '@mui/material'
import { Gif } from '@mui/icons-material'
import { GifBox } from '@mui/icons-material'
import { GifBoxSharp } from '@mui/icons-material'
import { CardGiftcard } from '@mui/icons-material'
import Money from '@mui/icons-material/Money'
import PaidIcon from '@mui/icons-material/Paid';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

// Customs
import AdminActions from './AdminActions'
import useCompetitions, { useCompetitionsStore } from './hooks/useCompetitions'
import Button from '../button/Button'
import Marquee from './Marquee'
import { postCompetitionMemberSrv } from '../../services/competition/competitionService'
import { useIAStore } from '../ia/IAstore'
import { formatNumber } from '../../lib/utils'

const CompetitionDetail = (props) => {
  const {
    competitionDetail,
    userPicture,
    uidLogged
  } = props

  const {
    availableNumbers,
    price,
    seller,
    slug: competitionSlug,
    freeNumbers,
    paidNumbers,
    takenNumbers } = competitionDetail

  const {
    handleUserMessage,
    setIsvisible
  } = useIAStore((state => state))

  const {
    deleteNotPaidNumbers,
    getCompetitions,
    isOnlyAvailableNumbers,
    selectedNumber
  } = useCompetitions()

  const { set: setCompetitionStore } = useCompetitionsStore()

  var updatesQuantity = 0
  const MAX_REQUEST_UPDATE = 10
  const [showMembersNames, setShowMembersNames] = useState(false)
  const [competitionMembers, setCompetitionMembers] = useState(competitionDetail.members)
  const [updatingIn, setUpdatingIn] = useState(null)
  const [numbersList, setNumbersList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [availableNumbers, setAvailableNumbers] = useState(0)
  const [count, setCount] = useState(0);
  const refButtonUpdateDash = useRef()
  // const interval = useRef();
  const [timer, setTimer] = useState(0);
  const numbersListTemplate = Array.from({ length: competitionDetail.membersCapacity }, (_, i) => i + 1).map((number) => (
    { name: '', status: 'available', isPaid: false, number: null }
  ))

  const handleClick = (item, number) => { // Evento de clic del número del sorteo
    setCompetitionStore({ selectedNumber: number })
    if (seller.uid != uidLogged) {
      setIsvisible(true)
      // setnumberChosen(number)
      const options = {
        competitionID: competitionDetail.id,
        number,
        postCompetitionMemberSrv,
        sellerPhone: competitionDetail.seller.phone
      }
      handleUserMessage('competition', options)
    }
    else { // Admin del sorteo
      setCompetitionStore({ selectedNumbePhone: item.phone })
      handleUserMessage('competition/admin', { selectedNumber: number })
      setIsvisible(true)
    }
  }

  const settingTakenNumbers = (members) => { // Seteando números tomados a not available
    const isOnlyAvailableNumbers = document.querySelector('#check_available_numbers').checked
    const _numbersList = [...numbersListTemplate]
    members && members.map(item => { // TODO: get competition id from url
      _numbersList[item.number] = {
        ...item,
        status: 'blocked',
        hidden: isOnlyAvailableNumbers ? true : false,
      }
    })
    setNumbersList(_numbersList)
    setIsLoading(false)
    // Seteando números disponibles
    // const _availableNumbers = competitionDetail.membersCapacity - competitionMembers.length
    // setAvailableNumbers(_availableNumbers)
  }

  const initVisualInterval = (myVisualInterval) => {
    let demo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // myVisualInterval = setInterval(() => {
    const number = demo.shift()
    const newNumber = Number(Math.floor(Math.abs(number - 10)))
    console.log(newNumber)
    setUpdatingIn(newNumber == 0 ? '¡Tablero actualizado!' : newNumber + ' segundos...')
    if (demo.length == 0) clearInterval(myVisualInterval);
    // }, 1000)
  }

  const handleUpodateDashboard = () => {
    getCompetitions([competitionDetail.slug], true)
      .then(competitionDetailUpdated => { // TODO: get competition id from url
        // setCompetitionDetail({ ...competitionDetailUpdated })
        setCompetitionMembers(competitionDetailUpdated[0].members)
        settingTakenNumbers(competitionDetailUpdated[0].members)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    settingTakenNumbers(competitionDetail.members)
    let myVisualInterval
    // const myFetchInterval = setInterval(() => {
    updatesQuantity++
    if (updatesQuantity >= MAX_REQUEST_UPDATE) {
      setUpdatingIn(null)
      clearInterval(myVisualInterval);
      // clearInterval(myFetchInterval);
      return
    }
    initVisualInterval(myVisualInterval)
    refButtonUpdateDash.current.click()
    // }, 10000)

    return () => {
      clearInterval(myVisualInterval);
      // clearInterval(myFetchInterval);
    };
  }, [])

  const NumberComponent = ({ ind, item, number, uidNumber }) => {
    const isTakenByMe = uidLogged && uidNumber == uidLogged
    const { isPaid } = item
    return !item.hidden ? // <Tooltip key={ind} title={`Reservar el número ${ind}`}>
      <div
        className={`${styles.item} ${styles[item.status]} ${selectedNumber == ind && styles.selected}`}
        onClick={() => (item.status == 'available' || isTakenByMe) ? handleClick(item, ind) : null} >
        {ind}
        {isTakenByMe && <EmojiPeopleIcon className={styles.takenMeIcon} />}
        {!!isPaid && <PaidIcon className={styles.paidIcon} />}
      </div>
      // </Tooltip> 
      : <></>
  }

  return <div className={styles.CompetitionDetail}>
    {/* competitionDetail: {JSON.stringify(competitionDetail)} */}
    <div className={styles.left}>
      <div className={styles.news}>
        <Marquee />
      </div>
      <Alert severity="info" className={styles.alert}>
        <button ref={refButtonUpdateDash} className={styles.btnUpdateDashboard} onClick={handleUpodateDashboard}>
          Actualizar tablero<br />
        </button>
        {/* {updatingIn && <small>Automaticamente en {updatingIn}</small>} */}
      </Alert>
      <div className={styles.controlAvailablenumbers}>
        <FormControlLabel
          control={<Checkbox id="check_available_numbers" value={isOnlyAvailableNumbers} onClick={(e) => settingTakenNumbers(competitionMembers)} />}
          label="Mostrar sólo números disponibles" />
      </div>
      <div className={`Card ${styles.contentItems}`} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          // Iterando los numeros de la actividad
          numbersList.map((item, ind) => {
            const { number, uid: uidNumber } = item
            return <NumberComponent {...{ ind, item, number, uidNumber }} />
          })
        }
      </div>
    </div>
  </div>
}

export default CompetitionDetail
