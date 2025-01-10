/* eslint-disable react/jsx-key */
import styles from './competitions.module.scss'

import Link from 'next/link'
import { toast } from 'react-toastify'
const { motion } = require('framer-motion')
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom
import Button from '../../components/button/Button'

const CompetitionItem = ({ competition, ind }) => {
  const goToastNotAvailable = () => toast('Esta actividad ya ha pasado')
  const link = `/blue-panther/${competition.slug}`
  const awardLink = competition?.awardLink ? competition?.awardLink + '?origin=/concursos' : ''

  return <motion.article
    className={`Card ${styles.CompetitionItem}`}
    initial={{ y: '100%' }}
    key={ind}
    // onClick={() => competition.isActive ? handleCompetitionClick(competition.slug) : goToastNotAvailable}
    whileHover={{ scale: 1.1 }}
    animate={{ y: 0 }}>
    <h2>
      <Link href={link}>{competition.title}</Link>
    </h2>
    <div>
      Números disponibles:
      <span className={styles.availableNumbers}>
        {competition.availableNumbers}
      </span>
    </div>
    <div className={styles.seller}>
      <div>
        <img width={80} src={competition.seller.picture} />
      </div>
      <div>
        {/* <img width={200} style={{ right: competition.right }} src={competition.image} /> */}
        {competition.seller.name}
        <div className={styles.calification}>
          {[1, 1, 1].map(item => <FontAwesomeIcon className='icon' icon={faStar} />)}
        </div>
        <div>Ha realizado 5 concursos en los últimos 3 meses</div>
      </div>
    </div>
    <div className={styles.actions}>
      <Link href={awardLink}>
        <Button color='link' className={styles.award}>Ver premio</Button>
      </Link>
      <Link href={link}>
        <Button shine realistic color='blue' className={styles.award}>Participar</Button>
      </Link>
    </div>
  </motion.article >
}

export default CompetitionItem
