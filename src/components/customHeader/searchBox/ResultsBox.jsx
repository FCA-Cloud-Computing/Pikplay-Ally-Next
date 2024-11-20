import React from 'react'
import Link from 'next/link'
import Author from '../../card/Author'
import { formatNumber, getCiudades, getFeed } from '../../../lib/utils'
import Product from '../../../interfaces/Product'
import styles from '../styles.module.scss'

export const ResultsBox = ({ results }) => {
  const cities = getCiudades()

  {
    /* Listado de resultados */
  }
  const setShowSearchModal = (val) => { }

  return (
    <div className={styles.rows}>
      {results &&
        results.map((item, ind) => {
          const cityLabel = cities.find(row => row.id == item.city)
            ? cities.find(row => row.id == item.city)?.label
            : null
          const link = `/publicacion/${item.slug}`
          if (ind > -1) {
            return (
              <Link
                className='Card'
                href={link}
                key={item.slug}
                onClick={() => setShowSearchModal(false)}
              >
                <article className={styles.row}>
                  <img
                    className={styles.product}
                    src={item.image_link}
                    alt=''
                  />
                  <div>
                    <h2>{item.title}</h2>
                    {!!item.sale_price && (
                      <div className={styles.price}>
                        ${formatNumber(item.sale_price)}
                      </div>
                    )}
                    {item.user && (
                      <Author parentView='HeaderSearch' user={item.user} />
                    )}
                    <small className={styles.location}>{cityLabel}</small>
                  </div>
                </article>
              </Link>
            )
          }
        })}
    </div>
  )
}
