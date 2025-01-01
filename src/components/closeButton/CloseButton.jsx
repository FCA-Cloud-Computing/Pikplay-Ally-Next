import styles from './styles.module.scss'

import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CloseOutlined, PlusOne } from "@mui/icons-material"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const CloseButton = ({ onClick }) => {
    return <div className={styles.CloseButton} onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} />
    </div>
}

export default CloseButton
