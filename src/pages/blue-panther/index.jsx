import styles from '../../components/competitions/competitions.module.scss'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'

// Cutoms components
import useSystemStore from '../../hooks/storeSystem'
import { competitionsStore } from '../../components/competitions/hooks/competitionsStore'
import Layout from '../../components/layout/Layout'
import CompetitionsList from '../../components/competitions/CompetitionsList'
import useCompetitions from '../../components/competitions/hooks/useCompetitions'
import CompetitionDetail from '../../components/competitions/CompetitionDetail'
import { isEmpty } from '../../lib/utils'

// MUI
import { Box, Card, Tab, Tabs, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { ArrowBackIos } from '@mui/icons-material'
import { ArrowBackIosNew } from '@mui/icons-material'
import { ArrowBackIosNewOutlined } from '@mui/icons-material'
import { TrafficRounded } from '@mui/icons-material'
import { green } from '@mui/material/colors'
import Skeleton from '@mui/material/Skeleton'

const ConcursosPage = () => {
  const {
    competitions,
    competitionMembers,
    getCompetitions,
    handleCompetitionClick,
    selectedNumber,
    setSelectedNumber,
    setCompetitionMembers,
    isLoading
  } = useCompetitions()

  const { competitionDetail, setCompetitionDetail } = competitionsStore()
  const { userLogged: { picture: userPicture, uid: uidLogged } } = useSystemStore()

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    getCompetitions(null)
  }, [])

  function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  return (
    <div className={styles.CompetitionsComponent}>
      <Layout title="Concursos">
        <section className="page">
          <div className="contentTitle">
            {/* <Link href='/'>
              <ArrowBackIosNew className='icon backIcon' />
            </Link> */}
            <h1>
              <FontAwesomeIcon className="icon" icon={faDiceFive} />
              &nbsp;Concursos
            </h1>
          </div>
          {/* competitionDetail: {JSON.stringify(competitionDetail)} */}
          <Card>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
              indicatorColor='primary'>
              <Tab label={<div>
                <span className={`shine ${styles.activeIcon}`} />
                Concursos Activos
              </div>} />
            </Tabs>

            <TabPanel value={value} index={0}>
              {!isLoading && competitions.length > 0 && <CompetitionsList
                isLoading={isLoading}
                competitions={competitions}
                handleCompetitionClick={handleCompetitionClick}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
              />}
              {isLoading && <div> {
                new Array(3).fill(null).map((_, i) => (<Skeleton key={i} variant="rectangular" width='100%' height={120} className='Card' />))}
              </div>}
            </TabPanel>
          </Card>
        </section>
      </Layout>
    </div >
  )
}

export default ConcursosPage
