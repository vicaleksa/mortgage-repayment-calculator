import React from 'react';
import styles from './style.module.css';
import Calculator from '/src/svg/calculator.svg';


function PrimaryButton() {
    return (
        <button className={styles.btnPrimary}>
            <img src={Calculator} alt="" />
            <div className={styles.text}>Calculate Repayments</div>
        </button>
    )
}

export default PrimaryButton;