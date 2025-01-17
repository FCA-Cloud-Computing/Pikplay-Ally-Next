import { formatNumber } from '@/lib/utils'
import CoinIcon from '../coinIcon/CoinIcon'
import ProfileImage from '../profileImage/ProfileImage'
import styles from './authorInformation.module.scss'
import Button from '../button/Button'

export const AuthorInformation = (props) => {
    const { background, name, place, givenPikcoins, picture } = props?.authorInformation || {}

    return <div className={`${styles.AuthorComponentPage}`} style={{ ['--backgroundImage']: `url(${background})` }}>
        <div className={styles.content}>
            <ProfileImage picture={picture} />
            <br />
            <div className={styles.namePlace}>
                <b>{name}</b>
                <small>{place}, Colombia</small>
            </div>
            <hr />
            {givenPikcoins && <div className={styles.creditsGiven}>
                <CoinIcon />
                <div>
                    <b>{formatNumber(givenPikcoins)}</b>
                    <small>Pikcoins <br />entregadas</small>
                </div>
            </div>}
            <div className={styles.aboutMe}>
                <Button color='yellow'>
                    Acerca de {name}
                </Button>
            </div>
        </div>
    </div>
}
