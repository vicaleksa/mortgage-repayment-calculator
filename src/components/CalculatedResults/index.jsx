import React from 'react';
import styles from './style.module.css';

function CalculatedResults({result}) {
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
                    £{result.monthly}
                </p>
                <div className={styles.divider}></div>
                <p className={styles.description}>
                    Total you'll repay over the term
                </p>
                <p className={styles.total}>
                    £{result.total}
                </p>
            </div>
        </div>
    )
}

export default CalculatedResults;