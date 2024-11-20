import React, { useState } from 'react'
import useSearch from './useSearch'
import Link from 'next/link'
import Product from '../../../interfaces/Product'
import Author from '../../card/Author'
import { motion } from 'framer-motion'
import { formatNumber, getCiudades, getFeed } from '../../../lib/utils'
import { TextField } from '@mui/material'
import { IS_MOBILE } from '../../../lib/variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { Loading } from './Loading'
import { MostPopularSearches } from './MostPopularSearches'
import PreviewUser from '../../previewUser/PreviewUser'
import { ResultsBox } from './ResultsBox'
import styles from '../styles.module.scss'
import { NewProfiles } from './NewProfiles'
import Notification from '../../previewNotifications'

const SearchBox = ({ inputText, isLoading, results, setInputText }) => {
  const { setShowSearchModal, showSearchModal } = useSearch()

  return (
    <div className={styles.content_buscador}>
      <div className={styles.content_Textfield}>
        {IS_MOBILE && showSearchModal && (
          <FontAwesomeIcon
            className={styles.ArrowLeft}
            icon={faArrowLeft}
            onClick={() => setShowSearchModal(false)}
          />
        )}
        <TextField
          autoComplete='off'
          className={styles.Textfield}
          disabled={isLoading}
          id='inpSearchButton'
          onFocus={e => setShowSearchModal(true)}
          onChange={e => setInputText(e.target.value)}
          fullWidth
          value={inputText}
          label={
            <span>
              Busca tiendas o productos gamer
              <FontAwesomeIcon className='m-l-10' icon={faSearch} />
            </span>
          }
          variant='standard'
          size='small'
        />
      </div>

      {
        // Modal
        showSearchModal && (
          <motion.div
            className={styles.results}
            initial={{ x: '50%' }}
            animate={{
              x: 0,
            }}
          >
            <section className={styles.barra_lateral}>
              <MostPopularSearches setInputText={setInputText} />
              {isLoading && <Loading />}
              {!isLoading && <ResultsBox results={results} />}
              {/*results && <Alert severity="info">
                  Se encontraron <CountUp end={results.length} /> resultados para {inputText} en {cityLabelSearch}
                </Alert>*/}
              {/* <div className={styles['grid-container']}>
                  {results && results.length > 0 && <Link href={`/publicacion/${premiumResult.slug}`}>
                    <article className="primary pointer">
                      <img className={styles.discount} src="/images/icons/discounts.png" />
                      <img src={premiumResult.image_link} alt="" />
                      <summary>
                        <span>
                          Llévalo por solo&nbsp;
                          {!!premiumResult.sale_price && <price className={styles.price}>
                            ${formatNumber(premiumResult.sale_price)}
                          </price>}
                        </span>
                        <h2>{premiumResult.title}</h2>
                        <p>
                          {cities.find(row => row.id == premiumResult.city) ? cities.find(row => row.id == premiumResult.city)?.label : null}
                        </p>
                      </summary>
                    </article>
                  </Link>
                  }
                </div> */}
            </section>
            <div
              className={styles.background}
              onClick={() => setShowSearchModal(false)}
            ></div>
          </motion.div>
        )
      }
    </div>
  )
}

export default SearchBox
