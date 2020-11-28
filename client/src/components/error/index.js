import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import errorImg from '../../assets/images/error.png'

import styles from './styles.module.scss'

export const Error = () => {
    const error = useSelector((state) => state.app.error)
    const history = useHistory()

    if (!error.message.length) {
        return null
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.errorImgBlock}>
                <img src={errorImg} alt="Error" />
            </div>
            <h1>{error.message}</h1>
            <div className={styles.btnsBlock}>
                <Link to="/">На главную</Link>
                <Link to={history.location.pathname}>Обновить страницу</Link>
            </div>
        </div>
    )
}
