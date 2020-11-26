import React from 'react'

import styles from './style.module.scss'

export const Currency = () => {
    return (
        <div className={styles.currency}>
            <ul>
                <li className={styles.active}>
                    <span className={styles.ico}>£</span>
                    <span className={styles.title}>GBP</span>
                </li>
                <li>
                    <span className={styles.ico}>€</span>
                    <span className={styles.title}>EUR</span>
                </li>
                <li>
                    <span className={styles.ico}>₽</span>
                    <span className={styles.title}>RUB</span>
                </li>
            </ul>
        </div>
    )
}
