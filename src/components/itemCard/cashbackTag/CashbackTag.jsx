import styles from './styles.module.scss'

import CoinIcon from "../../coinIcon/CoinIcon";

const CashbackTag = () => {
    return (
        <div className={`${styles.CashbackTag} CashbackTag`}>
            <span
                title='Ganarás Pikcoins por hacer esta compra'
                className={styles.apply_cashback}>
                <picture className={styles.coin} />
                ¡Cashback!
                <CoinIcon hideNumber />
            </span>
        </div>
    );
}

export default CashbackTag
