import styles from './previewUser.module.scss'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Login from '../login/Login'
import CoinIcon from '../coinIcon/CoinIcon'
import { IS_MOBILE } from '../../lib/variables'
import useSystemStore from '../../hooks/storeSystem'
import UserNotifications from '../userNotifications/UserNotifications'
import Button from '../button/Button'

const ProfileImage = dynamic(() => import('../profileImage/ProfileImage'), { ssr: false })
const MenuMobileOptions = dynamic(() => import('./MenuMobileOptions'), { ssr: false })

const PreviewUser = () => {
  const { userLogged, leftMenuBar, leftMenuBar: { isShow }, setStoreValue, leftBottomMenuContent } = useSystemStore((state => state))
  const { picture, name, coins } = userLogged || {}

  const handleClickImage = () => {
    setStoreValue('leftMenuBar', { ...leftMenuBar, isShow: !isShow })
  }

  return (
    <div
      className={`
      ${styles.PreviewUser} PreviewUser
      ${isShow ? styles.actived : null}
      ${userLogged?.uid ? styles.userLogged : null}
      `}>
      {userLogged?.uid ? (
        <div>
          <ProfileImage
            suppressHydrationWarning={true}
            className="previewUser"
            handleClickImage={IS_MOBILE ? handleClickImage : null}
            picture={picture} />
          {/* TODO */}
          {/* Icono */}
          <div className={styles.coins} id="PreviewProfile--Coins">
            <CoinIcon coins={coins} />
            {/* <span className={styles.experience}>
              <FontAwesomeIcon icon={faHeartbeat} />
              <span>&nbsp;10/20.500</span>
            </span> */}
          </div>
          <div className={styles.bg_white}></div>
          {isShow && <>
            <MenuMobileOptions />
            <UserNotifications />
            <Button realistic className={styles.close_button} color="blue" onClick={() => setStoreValue('leftMenuBar', { isShow: false })}>Cerrar</Button>
          </>}
          {/* <div className={styles.elementToCloseBgBlack} onClick={() => setStoreValue('leftMenuBar', false)}></div> */}
          {leftBottomMenuContent}
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default PreviewUser
