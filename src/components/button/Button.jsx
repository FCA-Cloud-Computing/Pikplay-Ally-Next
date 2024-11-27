import styles from './button.module.scss'

import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  animation = false,
  border,
  children,
  className,
  color,
  databutton,
  disabled,
  isLink,
  id,
  onClick,
  outline,
  style,
  shine,
  realistic,
}) => {
  className = `${className} ${animation ? styles.animation : null}`

  return (
    <motion.span
      className={`
      ${styles.ButtonComponent} 
      ${realistic ? styles.realistic : ''}
      ${shine ? styles.shine : ''}
      ${border ? styles.border : ''}
      ${styles[color]}
      ${className}
      ${outline ? styles.outline : ''}
      ${isLink ? styles.link : ''}
    `}
      databutton={databutton}
      id={id}
      onClick={disabled ? null : onClick}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}>
      <button>{children}</button>
    </motion.span>
  )
}

export default Button
