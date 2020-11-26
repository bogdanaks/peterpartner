import React from 'react'
import api from '../../utils/api'

import styles from './styles.module.scss'

// import { MainLoader } from '../../components/loaders/main-loader'
import { Header } from '../../components/ui/header'
import { Card } from '../../components/card'
import { History } from '../../components/history'
import { Currency } from '../../components/currency'

export const Main = () => {
    const [card, setCard] = React.useState({})

    React.useEffect(() => {
        api.get(`api/card?&limit=1`).then((res) => {
            setCard(res.data[0])
        })
    }, [])

    return (
        <div className={styles.wrapper}>
            <Header title="Главная" />
            <div className={styles.content}>
                <Card card={card} />
                <h2>Change currency</h2>
                <Currency />
                <div className={styles.history}>
                    <History history={card.transaction_history || []} />
                </div>
            </div>
        </div>
    )
}
