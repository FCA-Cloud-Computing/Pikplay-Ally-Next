import styles from '../../../components/competitions/competitions.module.scss'

import React, { useEffect, useState } from 'react'
import { Box, Card, Tab, Tabs, Typography } from '@mui/material'
import Layout from '../../../components/layout/Layout'
import CompetitionsList from '../../../components/competitions/CompetitionsList'
import useCompetitions from '../../../components/competitions/hooks/useCompetitions'
import CompetitionDetail from '../../../components/competitions/CompetitionDetail'
import { isEmpty } from '../../../lib/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowBack } from '@mui/icons-material'
import { ArrowBackIos } from '@mui/icons-material'
import { ArrowBackIosNew } from '@mui/icons-material'
import { ArrowBackIosNewOutlined } from '@mui/icons-material'
import Link from 'next/link'
import { useCompetitionsStore } from '../../../components/competitions/hooks/useCompetitions'
import { getComptSrv } from '../../../services/competition/competitionService'
import useSystemStore from '../../../hooks/storeSystem'

const ConcursoDetailPage = (props) => {
  const {
    competitionDetail
  } = props

  const {
    competitions,
    competitionMembers,
    getCompetitions,
    handleCompetitionClick,
    selectedNumber,
    setSelectedNumber,
    setCompetitionMembers
  } = useCompetitions()

  const { set } = useCompetitionsStore()
  const { userLogged: { picture: userPicture, uid: uidLogged } } = useSystemStore()

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    set({ competitionDetail })
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

  return <div className={styles.CompetitionsComponent}>
    <Layout title="Concursos">
      <section className="page">
        <div className="contentTitle">
          {/* <Link href='/concursos'>
            <ArrowBackIosNew className='icon backIcon' />
          </Link> */}
          <h1 className="main">{competitionDetail.title}</h1>
        </div>
        <Card>
          <CompetitionDetail
            {...{
              // competitions,
              competitionDetail,
              competitionMembers,
              setCompetitionMembers,
              setSelectedNumber,
              selectedNumber,
              userPicture,
              uidLogged
            }}
          />
        </Card>
      </section>
    </Layout>
  </div>
}

ConcursoDetailPage.getInitialProps = async (ctx) => {
  const { query: { id: slug } } = ctx
  let res = await getComptSrv(ctx, slug)
  return { competitionDetail: res }
}

export default ConcursoDetailPage
