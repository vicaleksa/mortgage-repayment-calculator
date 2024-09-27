import React from "react";
import styles from './style.module.css';
import Radio from '../Radio';

function RadioGroup() {
    return (
        <fieldset className={styles.radioSet}>
            <span className={styles.radioLegend}>Mortgage Type</span>
            <Radio
                name={'repayment'}
                text={'Repayment'}
            />
            <Radio
                name={'interest_only'}
                text={'Interest Only'}
            />
        </fieldset>
    )
}

export default RadioGroup;