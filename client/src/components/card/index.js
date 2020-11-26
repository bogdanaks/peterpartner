import React from 'react'
import { Link } from 'react-router-dom'

import mastercardIcon from '../../assets/images/cards-icons/master-card.svg'
import visaIcon from '../../assets/images/cards-icons/visa.svg'
import unionpayIcon from '../../assets/images/cards-icons/unionpay.svg'
import userIcon from '../../assets/images/user.svg'

import styles from './styles.module.scss'

const icons = {
    mastercard: mastercardIcon,
    visa: visaIcon,
    unionpay: unionpayIcon,
}

export const Card = ({ card }) => {
    console.log(card)
    return (
        <Link to="/mycards">
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <img src={icons[card.type]} alt="Master Card Icon" />
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
                    <span className={styles.money}>£2 125,12</span>
                    <div className={styles.balanceBlock}>
                        <span>Your balance</span>
                        <span>${card.balance}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
