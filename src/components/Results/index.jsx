import React from 'react';
import styles from './style.module.css';
import ExpectedResults from '../ExpectedResults';
import CalculatedResults from '../CalculatedResults';


function Results() {
    return (
        <div className={styles.container}>
            <CalculatedResults />
        </div>
    )
}

export default Results;
