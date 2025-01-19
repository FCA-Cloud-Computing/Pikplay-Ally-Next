'use client'
import { AuthorInformation } from '@/components/authorInformation/AuthorInformation'
import ItemCard from '@/components/itemCard/ItemCard'
import Layout from '@/components/layout/Layout'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

const DefaultSellerPage = (props) => {
  const { params } = props
  const router = useRouter()
  const { sellerSlug } = router.query

  const DBTemp = {
    'le-fragance': {
      authorInformation: {
        dividerColor: '#b0b0b0',
        background: '/images/backgrounds/campo-bg.jpeg',
        name: 'Le Fragance',
        place: 'Barranquilla',
        givenPikcoins: 3000,
        picture: 'https://s.cafebazaar.ir/images/icons/com.manage.retail.store-35f341c0-a6ab-4cc5-889a-e9692024fa9e_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize',
        whatsappNumber: 573016815784
      },
      products: [{
        images: [
          { url: '/images/le-fragance/products/one-million.webp' }
        ],
        is_new: true,
        title: 'Paco Rabanne One million 1 Million Tradicional EDT 200 ml para hombre',
        quantity: 5,
        price: 130000,
        cashback_available: true,
        user: {
          name: 'Le Fragance',
          picture: 'https://s.cafebazaar.ir/images/icons/com.manage.retail.store-35f341c0-a6ab-4cc5-889a-e9692024fa9e_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
        }
      },
      {
        images: [
          { url: '/images/le-fragance/products/acgua di gio.avif' }
        ],
        is_new: true,
        title: 'Acgua di gio',
        quantity: 5,
        price: 130000,
        cashback_available: true,
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
        givenPikcoins: 3000,
        name: 'Nataliatution',
        picture: '/images/nataliatution/logo.jpg',
        place: 'Barranquilla',
        secondaryColor: 'white',
        whatsappNumber: 573117504310
      },
      products: [{
        images: [
          { url: '/images/nataliatution/products/product1.jpeg' }
        ],
        is_new: true,
        title: 'Ropa, Calzado y Accesorios de Dama',
        cashback_available: true,
        user: {
          name: 'Nataliatution',
          picture: '/images/nataliatution/logo.jpg'
        }
      },
      {
        images: [
          { url: '/images/nataliatution/products/deportiva.jpg' }
        ],
        is_new: true,
        title: 'Ropa Deportiva de Dama',
        cashback_available: true,
        user: {
          name: 'Nataliatution',
          picture: '/images/nataliatution/logo.jpg'
        }
      }]
    }
  }

  const { authorInformation, products } = DBTemp[sellerSlug?.toLowerCase()] || {}

  return <Layout title="Concursos">
    <section className="page">
      <AuthorInformation authorInformation={authorInformation} />
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
    </section>
  </Layout>
}

DefaultSellerPage.getInitialProps = (ctx) => {
  const { asPath, req } = ctx
  return {

  }
}

export default DefaultSellerPage
