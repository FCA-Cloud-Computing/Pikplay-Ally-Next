import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { useState } from 'react'
import {
  Button as ButtonMat,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from '@mui/material'
import { capitalize, getCiudades } from '../../../lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import {
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'

const ChangeCity = props => {
  const { setInputText, handleCity } = props
  const user = useSelector(state => state.user)
  const [defaultCity, setDefaultCity] = useState(
    user.city ? user.city : 'bogota',
  )
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const cityLabel =
    getCiudades().find(city => city.id === defaultCity)?.label || null
  const dispatch = useDispatch()
  const handleChange = event => {
    const city = event.target.value ? event.target.value : 'all'
    setDefaultCity(city)
    setTimeout(() => {
      handleClose()
      handleCity(city)
      dispatch({
        type: 'CHANGE_PROPERTY',
        payload: { property: 'user', value: { ...user, city } },
      })
    }, 500)
  }

  return (
    <div className={styles.ChangeCity}>
      <Tooltip title='Te priorizaremos publicaciones según el lugar que nos indiques'>
        <p className='m-l-10' onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          Estas en &nbsp;{cityLabel}
        </p>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {/* Content */}
            <FormControl>
              <InputLabel id='demo-simple-select-label'>
                Cambiar ubicación
              </InputLabel>
              <Select
                id='demo-simple-select'
                labelId='demo-simple-select-label'
                onChange={handleChange}
                value={defaultCity}
                width='200px'
              >
                {getCiudades().map(item => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {capitalize(item.pais)} {item.label}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonMat onClick={handleClose} color='secundary'>
            Cancelar
          </ButtonMat>
          <ButtonMat onClick={handleChange} color='primary'>
            En cualquier lugar
          </ButtonMat>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ChangeCity
