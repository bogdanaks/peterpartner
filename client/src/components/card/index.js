import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { setActiveCard } from '../../redux/actions/cardAction'

import { useGetRate } from '../../hooks/useGetRate'

import { icons } from '../../utils/icons'
import userIcon from '../../assets/images/user.svg'

import styles from './styles.module.scss'

export const Card = ({ card }) => {
    const dispatch = useDispatch()
    const currentCurrency = useSelector((state) => state.app.currentCurrency)
    const [getRate] = useGetRate()

    const handleCardClick = () => {
        dispatch(setActiveCard(card))
    }

    return (
        <Link to="/mycards" onClick={handleCardClick}>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <img src={icons[card.type]} alt={card.type} />
                    <span className={styles.cardNumber}>{card.card_number}</span>
                </div>
                <div className={styles.row}>
                    <img src={userIcon} alt="User Icon" />
                    <span className={styles.userName}>{card.cardholder_name}</span>
                    <div className={styles.validBlock}>
                        <span>VALID THRU</span>
                        <span>{card.valid}</span>
                    </div>
                </div>
                <div className={styles.row}>
                    <span className={styles.money}>{`${currentCurrency.symbol}${
                        getRate(card.balance, currentCurrency.name) || 0
                    }`}</span>
                    <div className={styles.balanceBlock}>
                        <span>Your balance</span>
                        <span>${Number(card.balance).toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
