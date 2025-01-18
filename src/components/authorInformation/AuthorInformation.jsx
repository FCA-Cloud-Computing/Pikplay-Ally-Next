import { formatNumber } from '@/lib/utils'
import CoinIcon from '../coinIcon/CoinIcon'
import ProfileImage from '../profileImage/ProfileImage'
import styles from './authorInformation.module.scss'
import Button from '../button/Button'
import { useIAStore } from '../ia/IAstore'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

export const AuthorInformation = (props) => {
    const {
        background,
        dividerColor,
        facebook ,
        givenPikcoins,
        instagram,
        name,
        picture,
        place,
        whatsapp,
    } = props?.authorInformation || {}
    const { setIAMessage } = useIAStore()
    const aboutBluepanther = '<b>Bluepanther</b> <br/>Somos una marca de venta/compra de videojuegos, tenemos local en Medellín y en Bogotá'

    return <div className={`${styles.AuthorComponentPage}`} style={{ ['--backgroundImage']: `url(${background})` }}>
        <div className={styles.content}>
            <ProfileImage picture={picture} />
            <br />
            <div className={styles.namePlace}>
                <b>{name}</b>
                <small>{place}, Colombia</small>
            </div>
            <hr style={{ background: dividerColor }} />
            {givenPikcoins && <div className={styles.creditsGiven}>
                <CoinIcon />
                <div>
                    <b>{formatNumber(givenPikcoins)}</b>
                    <small>Pikcoins <br />entregadas</small>
                </div>
            </div>}
            <div className={styles.socialContent}>
                <a href={instagram} target="_blank">
                    <InstagramIcon />
                </a>
                <a href={whatsapp} target="_blank">
                    <WhatsAppIcon />
                </a>
                <a href={facebook} target="_blank">
                    <FacebookIcon />
                </a>
            </div>
            <div className={styles.aboutMe}>
                <Button color='yellow' onClick={() => setIAMessage(aboutBluepanther)}>
                    Acerca de {name}
                </Button>
            </div>
        </div>
    </div>
}
