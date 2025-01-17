import { AuthorInformation } from '@/components/authorInformation/AuthorInformation'
import ItemCard from '@/components/itemCard/ItemCard'
import Layout from '@/components/layout/Layout'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeFragance = () => {
    const product = {
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
    }

    const authorInformation = {
        background: '/images/backgrounds/campo-bg.jpeg',
        name: 'Le Fragance',
        place: 'Barranquilla',
        givenPikcoins: 3000,
        picture: 'https://s.cafebazaar.ir/images/icons/com.manage.retail.store-35f341c0-a6ab-4cc5-889a-e9692024fa9e_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize'
    }

    return <Layout title="Concursos">
        <section className="page">
            <AuthorInformation authorInformation={authorInformation} />
            <div className="contentTitle">
                <h1>
                    <FontAwesomeIcon className="icon" icon={faDiceFive} />
                    &nbsp;Productos
                </h1>
            </div>
            <ItemCard {...product} />
        </section>
    </Layout>
}



export default LeFragance
