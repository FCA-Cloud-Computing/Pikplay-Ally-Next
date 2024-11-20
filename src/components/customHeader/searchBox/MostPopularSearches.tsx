import React from 'react'
import Chip from '@mui/material/Chip'
import { Avatar } from '@mui/material'
import styles from '../styles.module.scss'

export const MostPopularSearches = ({ setInputText }) => {
  const array = [
    {
      avatar:
        'https://icons.iconarchive.com/icons/ph03nyx/super-mario/256/Paper-Mario-icon.png',
      label: 'Mario Kart',
    },
    {
      avatar:
        'https://i.pinimg.com/originals/e9/40/cb/e940cbc391be495e6b75ddd1ef76c545.png',
      label: 'Nintendo',
    },
    {
      avatar:
        'https://www.shutterstock.com/shutterstock/photos/377215876/display_1500/stock-vector-second-hand-red-leather-label-or-price-tag-on-white-background-vector-illustration-377215876.jpg',
      label: 'Usaditos',
    },
    {
      avatar:
        'https://i.pinimg.com/550x/9b/a9/27/9ba9274f14cc3ec3b73d087da2447dbc.jpg',
      label: 'Acepto cambios',
    },
  ]

  return (
    <div id={styles.most_popular_searches}>
      <h5>Busquedas en tendencia:</h5>
      {array.map(item => (
        <Chip
          className={styles.items}
          avatar={<Avatar alt='Natacha' src={item.avatar} />}
          label={item.label}
          variant='outlined'
          onClick={e => setInputText(e.target.innerHTML)}
        />
      ))}
    </div>
  )
}
