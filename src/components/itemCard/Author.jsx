import styles from './author.module.scss'

import React from 'react'
import Zoom from '@mui/material/Zoom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '@mui/material'
import {
  faCheckCircle,
  faStar,
  faStore,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Author = ({ user = {}, parentView }) => {
  return (
    <div className={`${styles.AuthorComponent} author ${styles[parentView]}`}>
      <img
        alt={`Imagen de ${user?.name}`}
        className={styles.user_picture}
        src={user?.picture}
      />
      {/* <Tooltip TransitionComponent={Zoom} title='Informacion del aliado'>
        <div className={`content-icon-store ${styles['content-icon-store']}`}>
          <FontAwesomeIcon icon={faStore} />
        </div>
      </Tooltip> */}
      <div
        className={styles.content}
        title={
          user?.certificate
            ? 'El usuario esta certificado, puedes confiar en esta oferta'
            : ''}>
        {!!user?.certificate && (
          <Tooltip TransitionComponent={Zoom} title='Aliado certificado'>
            <span className='star-content'>
              <FontAwesomeIcon className={styles.star} icon={faStar} />
            </span>
          </Tooltip>
        )}
        <Tooltip
          TransitionComponent={Zoom}
          title='Nombre de quien vende el articulo'>
          <h3>
            {user?.name}
            <svg style={{ position: 'relative', left: '5px', top: '4px' }}
              aria-label="Verificado" class="x1lliihq x1n2onr6" fill="#3095B2" height="18" role="img" viewBox="0 0 40 40" width="18"><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
          </h3>

          <div className={styles.calification}>
            {[1, 1, 1].map(item => <FontAwesomeIcon icon={faStar} />)}
          </div>
        </Tooltip>
        {user?.transactions > 0 && (
          <div className={styles.transactions}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>{user?.transactions} ventas completadas</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Author
