import React from 'react'
import { Link } from 'react-router-dom'

import arrowLeftSvg from '../../../assets/images/arrow-left.svg'

import styles from './styles.module.scss'

export const Header = ({ title, backBtn }) => {
    return (
        <div className={styles.wrapper}>
            {backBtn && (
                <Link to="/" className={styles.btnLeft}>
                    <img src={arrowLeftSvg} alt="Arrow Left" />
                </Link>
            )}
            <h1>{title}</h1>
        </div>
    )
}
