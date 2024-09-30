import React from 'react';
import styles from './style.module.css';

function CalculatedResults() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Your results
            </h2>
            <p className={styles.description}>
                Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
            </p>
            <div className={styles.repaymentsContainer}>
                <p className={styles.description}>
                    Your monthly repayments
                </p>
                <p className={styles.monthly}>
                    £1,797.74
                </p>
                <div className={styles.divider}></div>
                <p className={styles.description}>
                    Total you'll repay over the term
                </p>
                <p className={styles.total}>
                    £539,322.94
                </p>
            </div>
        </div>
    )
}

export default CalculatedResults;