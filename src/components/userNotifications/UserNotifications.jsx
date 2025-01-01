/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from './userNotifications.module.scss'

import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import Router from 'next/router'

import { getNotificationsSrv, updateProfileSrv } from '../../services/user/userService'
import CoinIcon from '../coinIcon/CoinIcon'
import useSystemStore from '../../hooks/storeSystem.js'
import uploadFile from "../../services/uploadFile";

const { motion } = require('framer-motion')

moment.locale('es-CO')

const UserNotifications = () => {
  const { userLogged, notifications, setStoreValue } = useSystemStore((state => state))
  const { uid } = userLogged
  const [fileUploaded, setFileUploaded] = useState(false);
  const fileInputRef = useRef(null);
  const [bannerPictureProfile, setBannerPictureProfile] = useState(false);
  // const user = useSelector(state => state.user)
  // const notifications = useSelector(state => state.notifications) //.filter(item => item.closed == 0)
  // const [deleteNotification] = useMutation(DELETE_NOTIFICATION, {
  //   onCompleted: ({ data, message, status }) => {
  //     if (status === 200) {
  //       getNotifications()
  //     }
  //   },
  // })
  // const [createCoin] = useMutation(CREATE_COIN)
  // const dispatch = useDispatch()

  // const reclamarCoins = async (coins, idNotification) => {
  //   const reqRes = await createCoin({
  //     variables: {
  //       id: idNotification,
  //     },
  //   })

  //   const { message, status } = reqRes.data.createCoin
  //   toast(message)

  //   if (status === 200) {
  //     confetti()
  //     dispatch({ type: 'RECLAMAR_COINS', payload: { coins } }) // Coins UI
  //     toast(`Has recibido ${formatNumber(coins)} Pikcoins, ¡felicidades!`)
  //     handleDeleteNotification(idNotification) // Delete notificacion (BD and UI)
  //     getNotifications()
  //     return true
  //   }
  // }

  // const handleDeleteNotification = id => {
  //   notifications.find(item => item.id === id).closed = '1'
  //   deleteNotification({ variables: { id, userId: user.id } }) // Delete notification BD
  // }

  const handleDeleteNotification = () => { }

  const getNotifications = () => {
    if (userLogged.uid) {
      getNotificationsSrv(userLogged.uid)
        .then(res => {
          setStoreValue('notifications', res.data)
        });
    }
  }

  const handleNotification = async (item) => {
    const { coins, id, link, type } = item
    if (coins) {
      // reclamarCoins(coins, id)
      setStoreValue('isAwardSummaryModalOpen', true)
    } else {
      handleDeleteNotification(id)
    }
    if (link) Router.push(link)
  }

  const handlerInputFile = async (event) => {
    const value = event.target.files[0]
    if (value) {
      const urlImage = await uploadFile("profile", value, `${uid}`);
      updateProfileSrv(null, uid, { picture: urlImage })
        .then(data => {
          setStoreValue('userLogged', { ...userLogged, picture: urlImage })
        })
    }
  }

  const container = {
    hidden: { opacity: 1, scale: 1, x: "-100vw" },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1 // Tiempo para que cada elemento hijo empiece a salir
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  useEffect(() => {
    getNotifications()
  }, [])

  useEffect(() => {
    // Setting banner picture profile to true if there is a notification with cid 1 (profile image completed)
    notifications.filter(item => item.cid === 1).length > 0 && setBannerPictureProfile(true)
  }, [notifications])

  return (
    <div className={`UserNotifications ${styles.UserNotifications}`}>
      <div className={styles.options}>
        {/* <FontAwesomeIcon icon={faBell} className='m-r-10 icon' /> */}
        <motion.span>
          Mis notificaciones
        </motion.span>
        {/* <span>Marcar todas como leídas</span> */}
      </div>
      <motion.ul
        animate="visible"
        initial="hidden"
        variants={container}>
        {notifications && notifications.map(
          (item) => {
            const {
              claimed,
              coins,
              createdAt,
              description,
              image,
              id,
              link,
              status,
              type,
            } = item

            const created = moment(createdAt).fromNow()
            const srcNotificationImg =
              type === 'COUPON_GIFT_AVAILABLE'
                ? '/images/type_notification/coupon_gift_available.png'
                : type === 'COMPLETED_PROFILE'
                  ? '/images/type_notification/completed_profile.png'
                  : type === 'COINS_BY_PURCHASE'
                    ? '/images/type_notification/coins_by_purchase.png'
                    : '/images/type_notification/coins_by_purchase_completed.png'
            return (
              // <Tooltip title={created} key={id}>
              <motion.li
                className={classNames('Card', { [styles.read]: status })}
                key={id}
                variants={item}
                onClick={() => !claimed && handleNotification(item)}>
                {/* {!disabled && <FontAwesomeIcon icon={faCircle} />} */}
                {/* <Image
                  alt='icon-notification'
                  className={styles.img_notification}
                  height={35}
                  src={srcNotificationImg}
                  width={48}
                /> */}
                <small>
                  hace {created}
                </small>
                <span>{description}</span>
                {image && <picture className={styles.picture}>
                  <img src={image} />
                </picture>}
                {coins && <CoinIcon hideNumber />}
                {/* {!coins && <div className={styles.content_close}></div>} */}
              </motion.li>
              // </Tooltip>
            )
          },
        )}
      </motion.ul>
      <input onChange={handlerInputFile} ref={fileInputRef} type="file" style={{ display: 'none' }} />
      <img onClick={() => fileInputRef.current.click()} style={{ borderRadius: '5px' }} src="/images/banners/gana_tus.png" />
    </div>
  )
}

export default UserNotifications
