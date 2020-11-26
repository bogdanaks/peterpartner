import React from 'react'

import styles from './styles.module.scss'

export const MainLoader = () => {
    return (
        <div className={styles.content}>
            <div className={styles.cardLoad}></div>
            <div className={styles.currencyTitle}></div>
            <div className={styles.currencyLoad}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className={styles.historyLoad}></div>
        </div>
    )
}
