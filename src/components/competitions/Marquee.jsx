import styles from './competitions.module.scss'

const Marquee = () => {
    return <marquee className="content">
        <span className={styles.item}>
            <span className={styles.user}>
                Pablo de la Cruz
            </span>
            <span>ha tomado el número 14 de <b>Act. 33 Playstation 5</b></span>
        </span>
        <span className={styles.item}>
            <span className={styles.user}>
                El Cacha
            </span>
            <span>ha tomado el número 14 de <b>Act. 33 Playstation 5</b></span>
        </span>
    </marquee>
}

export default Marquee
