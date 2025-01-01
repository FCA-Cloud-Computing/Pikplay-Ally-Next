import CloseButton from '../closeButton/CloseButton'
import styles from './bottomSheets.module.scss'

const BottomSheets = (props) => {
  const {
    backgroundBlocked = true,
    children,
    isBottomSheets,
    setIsBottomSheets,
  } = props
  return (<>
    <div className={`${isBottomSheets ? styles.active : ''} ${styles.BottomSheets} `}>
      <div id="draggable" draggable="true" className={styles.topLine} onDrag={() => setIsBottomSheets(false)} onClick={() => setIsBottomSheets(false)}></div>
      {children}
    </div>
    {backgroundBlocked && <div className={`${isBottomSheets ? styles.active : ''} ${styles.elementToClose}`} onClick={() => setIsBottomSheets(false)}></div>}
  </>
  )
}

export default BottomSheets
