/* eslint-disable react/jsx-key */
import styles from './competitions.module.scss'

import Link from 'next/link'
import { toast } from 'react-toastify'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Zoom from 'react-medium-image-zoom'
const { motion } = require('framer-motion')

// Custom
import Button from '../../components/button/Button'
import { formatNumber } from '@/lib/utils'

const CompetitionItem = ({ competition, ind }) => {
  const goToastNotAvailable = () => toast('Esta actividad ya ha pasado')
  const linkToDetail = `/${competition.seller?.slug}/${competition.slug}`
  const awardLink = competition?.awardLink ? competition?.awardLink + '?origin=/concursos' : ''

  return <motion.article
    className={`Card ${styles.CompetitionItem}`}
    initial={{ y: '100%' }}
    key={ind}
    // onClick={() => competition.isActive ? handleCompetitionClick(competition.slug) : goToastNotAvailable}
    // whileHover={{ scale: 1.1 }}
    animate={{ y: 0 }}>
    <h2>
      <Link href={linkToDetail}>{competition.title}</Link>
    </h2>
    <div className={styles.seller}>
      <div>
        <Zoom>
          <img width={80} src={competition.picture} />
        </Zoom>
      </div>
      <div>
        <div>
          Números disponibles:
          <span className={styles.availableNumbers}>
            {competition.availableNumbers}
          </span>
        </div>
        {/* <img width={200} style={{ right: competition.right }} src={competition.image} /> */}
        {/* <div className={styles.calification}>
          Calificación: {[1, 1, 1].map(item => <FontAwesomeIcon className='icon' icon={faStar} />)}
        </div> */}
        <div>Precio: ${formatNumber(competition.price)}</div>
      </div>
    </div>
    <div className={styles.actions}>
      {/* <Link href={awardLink}>
        <Button color='linkToDetail' className={styles.award}>Ver premio</Button>
      </Link> */}
      <Link href={linkToDetail}>
        <Button shine realistic color='blue' className={styles.award}>Participar</Button>
      </Link>
    </div>
  </motion.article >
}

export default CompetitionItem
