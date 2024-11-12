import React from 'react';
import styles from './style.module.css';
import ExpectedResults from '../ExpectedResults';
import CalculatedResults from '../CalculatedResults';


function Results({result}) {
    return (
        <div className={styles.container}>
            {result ? <CalculatedResults result={result} /> : <ExpectedResults />}
        </div>
    )
}

export default Results;
