import ItemCard from '@/components/itemCard/ItemCard'
import Layout from '@/components/layout/Layout'

const LeFragance = () => {
    const product = {
        images: [
            { url: '/images/le-fragance/products/one-million.webp' },
            { url: '/images/le-fragance/products/one-million-2.webp' }

        ],
        is_new: true,
        title: 'Paco Rabanne One million 1 Million Tradicional EDT 200 ml para hombre',
        quantity: 5,
        price: 130000,
        cashback_available: true
    }

    return <Layout title="Concursos">
        <section className="page">
            <div className="contentTitle">LE-FRAGANCE</div>
            <ItemCard {...product} />
        </section>
    </Layout>
}

export default LeFragance
