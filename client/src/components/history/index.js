import React from 'react'

import styles from './styles.module.scss'

export const History = ({ history }) => {
    return (
        <div className={styles.wrapper}>
            <h3>History</h3>
            {history.map((item, index) => (
                <div className={styles.row} key={index}>
                    <div className={styles.imgBlock}>
                        <img src={item.icon_url} alt={item.title} />
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.infoTitle}>{item.title}</span>
                        <span className={styles.infoDate}>{item.date}</span>
                    </div>
                    <div className={styles.operationBlock}>
                        <div>
                            <span>- £</span>
                            <span>{item.amount}</span>
                        </div>
                        <span className={styles.current}>$ 9.85</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
