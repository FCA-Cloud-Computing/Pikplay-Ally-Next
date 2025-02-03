import styles from '../components/competitions/competitions.module.scss'
import sellerSlugStyles from './sellerSlug.module.scss'

import { useEffect } from 'react'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Skeleton } from '@mui/material'
import { useRouter } from 'next/router'
import StarIcon from '@mui/icons-material/Star';
import { createGlobalStyle } from "styled-components";

// Custom
import { AuthorInformation } from '@/components/authorInformation/AuthorInformation'
import CompetitionsList from '@/components/competitions/CompetitionsList'
import useCompetitions from '@/components/competitions/hooks/useCompetitions'
import ItemCard from '@/components/itemCard/ItemCard'
import Layout from '@/components/layout/Layout'
import RankingComponent from '@/components/ranking/Ranking'

const DefaultSellerPage = (props) => {
  const { params } = props
  const router = useRouter()
  const { sellerSlug } = router.query

  const DBTemp = {
    'conversation-club': {
      authorInformation: {
        aboutHTML: '<div>English Club es un espacio para tener experiencias inmersivas en el idioma.</div>',
        aboutHTMLButtonStyle: { color: 'white', textDecoration: 'underline' },
        pageBackground: 'https://lonelinessandinternationalstudent.wordpress.com/wp-content/uploads/2015/10/language-exchange.jpg',
        cssClassPage: 'conversationClubPage',
        dividerColor: '#b0b0b0',
        // background: '/images/logos/pikplay_store_logo.png',
        name: 'English Club',
        place: 'Barranquilla - Soledad',
        givenPikcoins: 0,
        picture: '/images/users/conversation_club/logo.png',
        rankingId: 1,
        uid: 131,
        whatsappNumber: 573204863547
      },
    },
    'pikplay-store': {
      authorInformation: {
        dividerColor: '#b0b0b0',
        // background: '/images/logos/pikplay_store_logo.png',
        name: 'Pikplay Store',
        place: 'Barranquilla',
        givenPikcoins: 100,
        picture: '/images/users/pikplay_store/logo.png',
        uid: 131,
        whatsappNumber: 573204863547
      },
      competitions: ['cadena-oro-italiano-18k-60cm']
    },
    'le-fragance': {
      authorInformation: {
        dividerColor: '#b0b0b0',
        background: '/images/backgrounds/campo-bg.jpeg',
        name: 'Le Fragance',
        place: 'Barranquilla',
        givenPikcoins: 0,
        picture: 'https://s.cafebazaar.ir/images/icons/com.manage.retail.store-35f341c0-a6ab-4cc5-889a-e9692024fa9e_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize',
        whatsappNumber: 573016815784
      },
      products: [{
        images: [
          { url: '/images/users/le-fragance/products/one-million.webp' }
        ],
        isNew: true,
        title: 'Paco Rabanne One million 1 Million Tradicional EDT 200 ml para hombre',
        quantity: 5,
        price: 130000,
        cashbackAvailable: true,
        user: {
          name: 'Le Fragance',
          picture: 'https://s.cafebazaar.ir/images/icons/com.manage.retail.store-35f341c0-a6ab-4cc5-889a-e9692024fa9e_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
        }
      },
      {
        images: [
          { url: '/images/users/le-fragance/products/acgua di gio.avif' }
        ],
        isNew: true,
        title: 'Acgua di gio',
        quantity: 5,
        price: 100000,
        cashbackAvailable: true,
        user: {
          name: 'Le Fragance',
          picture: 'https://s.cafebazaar.ir/images/icons/com.manage.retail.store-35f341c0-a6ab-4cc5-889a-e9692024fa9e_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
        }
      }],
    },
    nataliatution: {
      authorInformation: {
        background: 'https://www.perfumesbogota.com.co/cdn/shop/products/fleur-orientica_580x.jpg?v=1677872919',
        dividerColor: 'white',
        givenPikcoins: 0,
        name: 'Nataliatution',
        picture: '/images/users/nataliatution/logo.jpg',
        place: 'Barranquilla',
        secondaryColor: 'white',
        whatsappNumber: 573117504310
      },
      products: [{
        images: [
          { url: '/images/users/nataliatution/products/product1.jpeg' }
        ],
        isNew: true,
        title: 'Ropa, Calzado y Accesorios de Dama',
        cashbackAvailable: true,
        user: {
          name: 'Nataliatution',
          picture: '/images/users/nataliatution/logo.jpg'
        }
      },
      {
        images: [
          { url: '/images/users/nataliatution/products/deportiva.jpg' }
        ],
        isNew: true,
        title: 'Ropa Deportiva de Dama',
        cashbackAvailable: true,
        user: {
          name: 'Nataliatution',
          picture: '/images/users/nataliatution/logo.jpg'
        }
      }]
    },
    'blue-panther': {
      authorInformation: {
        aboutHTML: `<div><video width="140" height="260" controls>
        <source src="/images/users/bluepanther/video.mp4" type="video/mp4">
        Tu navegador no soporta el elemento de video.
        </video></div>`,
        aboutHTMLButtonStyle: { color: 'white', textDecoration: 'underline' },
        background: 'https://instagram.fbaq5-1.fna.fbcdn.net/v/t39.30808-6/454723787_18361896526109558_4048109518435842878_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&cb=30a688f7-cd073ddd&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjkweDIyOTMuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbaq5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=SBaMXu0ZfHMQ7kNvgGxH71O&_nc_gid=02ee83935d0d4f0e84bb6d63c8af7296&edm=AGFyKLkAAAAA&ccb=7-5&ig_cache_key=MzQzMDM0NDMyMzM0NTU0Mzc2Mw%3D%3D.3-ccb7-5-cb30a688f7-cd073ddd&oh=00_AYCmBCSoTpS6At3Z4SeUoBtE6-2OKzfu0JraN-Xp6-Tm8w&oe=6790662D&_nc_sid=5a0a6d',
        dividerColor: '#cbcbcb',
        facebook: 'https://www.facebook.com/profile.php?id=100064982311928',
        givenPikcoins: 0,
        instagram: 'https://www.instagram.com/bluepanthervideogames/',
        name: 'Blue Panther',
        pageBackground: 'images/users/bluepanther/bg-blue.jpg',
        picture: '/images/users/bluepanther/logo.jpg',
        place: 'Medellín',
        rankingId: 2,
        whatsapp: 'https://api.whatsapp.com/send?phone=573106614305'
      },
      competitions: ['act-4-sorteo-de-navidad']
    }
  }

  const {
    authorInformation,
    competitions: competitionsArray,
    products,
  } = DBTemp[sellerSlug?.toLowerCase()] || {}
  const { rankingId } = authorInformation || {}

  const GlobalStyle = createGlobalStyle`
  main.App {
    background-image: url("${authorInformation?.pageBackground}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }`;

  const {
    isLoading: isLoadingCompetition,
    competitions,
    getCompetitions,
    handleCompetitionClick,
    selectedNumber,
    setSelectedNumber,
  } = useCompetitions()

  useEffect(() => {
    competitionsArray && competitionsArray.length > 0 && getCompetitions(competitionsArray)
  }, [])

  useEffect(() => {
    console.log('competitions', competitions)
  }, [competitions])

  return <Layout title="Concursos" cssClassPage={authorInformation?.cssClassPage}>
    <GlobalStyle />
    <section className="page">
      <AuthorInformation authorInformation={authorInformation} />
      {/* competitions:{JSON.stringify(competitions)} */}
      {competitions && competitions.length > 0 && <>
        <div className="contentTitle">
          <h1>
            <FontAwesomeIcon className="icon" icon={faDiceFive} />
            &nbsp;Sorteos
          </h1>
        </div>
        {/* Competitions */}
        <div className={`Card ${styles.CompetitionsComponent}`}>
          {!isLoadingCompetition && competitions.length > 0 && <CompetitionsList
            isLoading={isLoadingCompetition}
            competitions={competitions}
            handleCompetitionClick={handleCompetitionClick}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />}
          {isLoadingCompetition && <div> {
            new Array(3).fill(null).map((_, i) => (<Skeleton key={i} variant="rectangular" width='100%' height={120} className='Card' />))}
          </div>}
        </div>
      </>}

      {/* Ranking */}
      {rankingId && <>
        <div className={`contentTitle ${sellerSlugStyles.Ranking}`}>
          <h1>
            <StarIcon className={sellerSlugStyles.starIcon} />
            &nbsp;Ranking
          </h1>
        </div>
        <RankingComponent {...{ rankingId }} />
      </>}

      {/* Products */}
      {products && <>
        <div className="contentTitle">
          <h1>
            <FontAwesomeIcon className="icon" icon={faDiceFive} />
            &nbsp;Productos
          </h1>
        </div>
        {products && products.map(product =>
          <ItemCard
            {...product}
            {...{ whatsappNumber: authorInformation.whatsappNumber }}
          />
        )}
      </>}
    </section>
  </Layout>
}

DefaultSellerPage.getInitialProps = (ctx) => {
  const { asPath, req } = ctx
  return {

  }
}

export default DefaultSellerPage
