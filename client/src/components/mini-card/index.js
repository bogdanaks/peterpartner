import React from 'react'

import { icons } from '../../utils/icons'
import styles from './styles.module.scss'

export const MiniCard = ({ card }) => {
    return (
        <li className={styles.wrapper}>
            <img src={icons[card.type]} alt={card.type} />
            <span>{card.card_number}</span>
        </li>
    )
}
