import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCards } from '../../redux/actions/cardAction'

import { Header } from '../../components/ui/header'
import { MiniCard } from '../../components/mini-card'

export const MyCards = () => {
    const dispatch = useDispatch()
    const cards = useSelector((state) => state.card.cards)
    const activeCard = useSelector((state) => state.card.activeCard)

    React.useEffect(() => {
        dispatch(fetchCards())
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Header title="Мои карты" backBtn={true} />
            <ul>
                {cards.map((item, index) => (
                    <MiniCard
                        card={item || []}
                        key={index}
                        activeCardNumb={activeCard.card_number}
                    />
                ))}
            </ul>
        </>
    )
}
