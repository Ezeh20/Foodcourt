import React from 'react'
import styles from './Container.module.scss'

interface Children {
    children: React.ReactNode
}

export const Container = ({children}:Children) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
