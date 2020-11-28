import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setActiveCard } from '../../redux/actions/cardAction'

import { icons } from '../../utils/icons'

import styles from './styles.module.scss'

export const MiniCard = ({ card, activeCardNumb }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleCardClick = () => {
        dispatch(setActiveCard(card))
        history.push('/')
    }

    return (
        <li className={styles.wrapper} onClick={handleCardClick}>
            <img src={icons[card.type]} alt={card.type} />
            <span>{card.card_number}</span>
            {card.card_number === activeCardNumb ? (
                <div className={styles.activeCircle}></div>
            ) : null}
        </li>
    )
}
