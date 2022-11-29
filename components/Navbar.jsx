import { Typography } from '@mui/material'
import React from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar = (props) => {
  return (
    <div className={styles.nav}>
      <Typography variant='h4'>KUL42069</Typography>
    </div>
  )
}

export default Navbar