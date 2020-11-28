import React from 'react'
import { useSelector } from 'react-redux'

import { useGetRate } from '../../hooks/useGetRate'

import styles from './styles.module.scss'

export const History = ({ card }) => {
    const currentCurrency = useSelector((state) => state.app.currentCurrency)
    const [getRate] = useGetRate()

    if (card.transaction_history) {
        return (
            <div className={styles.wrapper}>
                <h3>History</h3>
                <div className={styles.list}>
                    <ul>
                        {card.transaction_history.map((item, index) => (
                            <li className={styles.row} key={index}>
                                <div className={styles.imgBlock}>
                                    <img src={item.icon_url} alt={item.title} />
                                </div>
                                <div className={styles.infoBlock}>
                                    <span className={styles.infoTitle}>{item.title}</span>
                                    <span className={styles.infoDate}>{item.date}</span>
                                </div>
                                <div className={styles.operationBlock}>
                                    <div>
                                        <span>{`${item.amount.split('-')[1] ? '-' : '+'} ${
                                            currentCurrency.symbol
                                        }`}</span>
                                        <span>
                                            {item.amount.split('-')[1]
                                                ? getRate(
                                                      Number(item.amount.split('-')[1]),
                                                      currentCurrency.name,
                                                  )
                                                : getRate(
                                                      Number(item.amount.split('+')[1]),
                                                      currentCurrency.name,
                                                  )}
                                        </span>
                                    </div>
                                    <span className={styles.current}>
                                        ${' '}
                                        {item.amount.split('-')[1]
                                            ? item.amount.split('-')[1]
                                            : item.amount.split('+')[1]}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    } else {
        return null
    }
}
