import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveCurrency } from '../../redux/actions/appAction'

import styles from './style.module.scss'

export const Currency = () => {
    const currentCurrency = useSelector((state) => state.app.currentCurrency)
    const dispatch = useDispatch()

    const handleClickCurrency = React.useCallback(
        (symbol, name) => {
            dispatch(setActiveCurrency(symbol, name))
        },
        // eslint-disable-next-line
        [currentCurrency],
    )

    return (
        <div className={styles.currency}>
            <ul>
                <li
                    className={currentCurrency.name === 'GBP' ? styles.active : ''}
                    onClick={() => handleClickCurrency('£', 'GBP')}>
                    <span className={styles.ico}>£</span>
                    <span className={styles.title}>GBP</span>
                </li>
                <li
                    className={currentCurrency.name === 'EUR' ? styles.active : ''}
                    onClick={() => handleClickCurrency('€', 'EUR')}>
                    <span className={styles.ico}>€</span>
                    <span className={styles.title}>EUR</span>
                </li>
                <li
                    className={currentCurrency.name === 'RUB' ? styles.active : ''}
                    onClick={() => handleClickCurrency('₽', 'RUB')}>
                    <span className={styles.ico}>₽</span>
                    <span className={styles.title}>RUB</span>
                </li>
            </ul>
        </div>
    )
}
