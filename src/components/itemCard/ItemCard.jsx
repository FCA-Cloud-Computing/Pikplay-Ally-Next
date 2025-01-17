/* eslint-disable react/jsx-key */
import styles from './itemCard.module.scss'

import React, { } from 'react'
import Link from 'next/link'
import Grow from '@mui/material/Grow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faHeartBroken,
} from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'
import classNames from 'classnames'
import Image from 'next/image'

import { ShareOutlined } from '@mui/icons-material'

// Custom
import useSystemStore from '../../hooks/storeSystem'
import CashbackTag from './cashbackTag/CashbackTag'
import Author from './Author'
import { formatNumber } from '../../lib/utils'

const ItemCard = (props) => {
  const {
    accept_changes,
    cashback_available,
    certificate,
    city,
    description,
    descuento = 0,
    destacada,
    following,
    handleFavorite,
    handleShare,
    isAddi,
    iconFavorite = false,
    id: publicationId,
    images,
    image_1,
    is_new,
    likes,
    logDetalle,
    price,
    quantity,
    sale_price,
    slug,
    special_title,
    tags,
    tipo_coleccion,
    title,
    type,
    user,
    user_name,
    user_picture,
    user_transactions,
  } = props

  const usuario =
    typeof localStorage != 'undefined'
      ? localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')).email
        : null
      : null
  let like = null
  if (usuario) like = likes ? !!likes.find(like => like == usuario) : false
  const isDestacada = publicationId == 1 ? true : false
  const { loggedUser } = useSystemStore()

  return (
    <Grow key={publicationId} in={true} style={{ opacity: 1 }}>
      <div
        key={publicationId}
        className={`${styles.ItemCard} ${isDestacada ? styles.isDestacada : ''}`}>
        <div className={styles.descripcion_imagen}>
          <div className={styles.content_imagen}>
            {/* Image */}
            <Link
              as={slug ? `/publicacion/${slug}` : 'javascript:void(0)'}
              className={styles.image_wrapper}
              key={publicationId}
              href={slug ? '/publicacion/[id]' : 'javascript:void(0)'}>
              {
                images && images.length > 0 && images.map(image => (
                  <Image
                    alt="imagen del producto"
                    layout='fill'
                    objectFit='contain'
                    src={image?.url}
                  />
                ))
              }
            </Link>
          </div>
          <div className={`tags ${styles.tags}`}>
            {!is_new && (
              <span
                title='El articulo es de segunda mano'
                className={styles.condition}>
                Usado
              </span>
            )}
            {/* Si aplica cashback */}
            {cashback_available && <CashbackTag />}
            {accept_changes && (
              <span
                className={styles.condition}
                title='El vendedor acepta productos como parte de pago o incluso cambiar el producto por otro de su interés'>
                Acepto cambios
              </span>
            )}
            {!!tags && tags.map((item, ind) => {
              return <span key={ind}>{item.texto}</span>
            })}
          </div>
          {cashback_available && <div className={styles.cashbackInformation}>Con esta compra obtienes <b>15% de creditos</b></div>}
          {
            <div className={styles.descripcion}>
              <div className={styles.icons}>
                <Tooltip title='Seguir publicación'>
                  <a>
                    <FontAwesomeIcon
                      icon={iconFavorite ? faHeart : faHeartBroken}
                      className={classNames(styles.faHeart, {
                        [styles.active]: following || !iconFavorite,
                      })}
                      onClick={() => {
                        loggedUser?.id != 0
                          ? handleFavorite({
                            variables: {
                              publication: publicationId,
                              user: loggedUser?.id,
                            },
                          })
                          : document.querySelector('#btnStart').click()
                      }}
                    />
                  </a>
                </Tooltip>
                <Tooltip title='Compartir'>
                  <a
                    href={`https://api.whatsapp.com/send?phone=&text=Revisa%20esta%20publicacion%20en%20Pikplay%20que%20esta%20potente%20https://pikplay.co/publicacion/${slug}`}
                    rel="noreferrer"
                    target='_BLANK'>
                    <ShareOutlined
                      className={styles.faShare} />
                    {/* <FontAwesomeIcon
                      icon={faShare}
                      className={styles.faShare}
                    /> */}
                  </a>
                </Tooltip>
              </div>
              <Link
                as={slug ? `/publicacion/${slug}` : 'javascript:void(0)'}
                className={publicationId == 1 ? styles.destacada_Card : ''}
                href={slug ? '/publicacion/[id]' : 'javascript:void(0)'}>
                <h2>
                  {title ? title : 'Espacio para el título de la publicación'}
                </h2>
              </Link>
              {user?.name && <Author user={user} />}
              {/* <small className={styles.location}> // TODO Mostrar la ciudad
                {cityLabel}
                &nbsp;-&nbsp;
                {countryLabel}
              </small> */}
              <p className={styles.quantity}>{quantity} unidades disponibles</p>
              <div className={styles['likes-precio']}>
                <div className={styles.content_precio}>
                  {
                    // Precio
                    Number(price) != 0 && (
                      <React.Fragment>
                        <span className={styles.nuevoPrecio}>
                          $ {formatNumber(price)}
                        </span>
                      </React.Fragment>
                    )
                  }
                </div>
              </div>
              {/* Banner de ADDI */}
              {isAddi && <div className={styles.contentAddi}>
                <span>
                  Llévatelo con
                </span>
                <img src="https://finanzasplus.co/wp-content/uploads/2024/03/addi-1024x575.webp" />
              </div>}
            </div>
          }
        </div>
      </div>
    </Grow>
  )
}

export default ItemCard
