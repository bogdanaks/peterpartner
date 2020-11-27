import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCards } from '../../redux/actions/cardAction'

import { MainLoader } from '../../components/loaders/main-loader'
import { Header } from '../../components/ui/header'
import { Card } from '../../components/card'
import { History } from '../../components/history'
import { Currency } from '../../components/currency'

import styles from './styles.module.scss'

export const Main = () => {
    const dispatch = useDispatch()
    const activeCard = useSelector((state) => state.card.activeCard)
    React.useEffect(() => {
        dispatch(fetchCards(1))
        // eslint-disable-next-line
    }, [])

    return (
        <div className={styles.wrapper}>
            <Header title="Главная" />
            {!activeCard ? (
                <MainLoader />
            ) : (
                <div className={styles.content}>
                    <Card card={activeCard} />
                    <h2>Change currency</h2>
                    <Currency />
                    <div className={styles.history}>
                        <History card={activeCard} />
                    </div>
                </div>
            )}
        </div>
    )
}
