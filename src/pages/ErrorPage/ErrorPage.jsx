import React from 'react'
import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={styles.error}>
      <div className='boldtext' id={styles.title}>Error 404</div>
      <div className="text" id={styles.text}>page is not defined</div>
    </div>
  )
}

export default ErrorPage