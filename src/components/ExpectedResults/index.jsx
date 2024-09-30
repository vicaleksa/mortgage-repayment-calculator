import React from 'react';
import styles from './style.module.css';
import ResultsPicture from '/src/svg/results.svg';

function ExpectedResults() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={ResultsPicture} alt="" />
            <h2 className={styles.title}>
                Results shown here
            </h2>
            <p className={styles.description}>
                Complete the form and click “calculate repayments” to see what your monthly repayments would be.
            </p>
        </div>
    )
}

export default ExpectedResults;