import React from 'react'

import styles from './styles.module.scss'

export const MiniLoader = () => {
    return (
        <>
            <li className={styles.miniCard}>
                <div></div>
                <div></div>
            </li>
            <li className={styles.miniCard}>
                <div></div>
                <div></div>
            </li>
            <li className={styles.miniCard}>
                <div></div>
                <div></div>
            </li>
        </>
    )
}
