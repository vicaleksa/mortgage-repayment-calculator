import React from 'react';
import styles from './style.module.css';
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';
import NumberField from '../NumberField';
import RadioGroup from '../RadioGroup';

function Form() {
    return (
        <div className={styles.mortgageCalculator}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Mortgage Calculator
                </h1>
                <SecondaryButton />
            </div>
            <form className={styles.form} action="" name='mortgage-calculator'>
                <div className={styles.inputGroup}>
                    <NumberField
                        title={'Mortgage Amount'}
                        prefix={'£'}
                        name={'mortgage_amount'}
                    />
                    <div className={styles.fieldGroup}>
                        <NumberField
                            title={'Mortgage Term'}
                            prefix={'years'}
                            prefixPosition={'right'}
                            name={'mortgage_term'}
                        />
                        <NumberField
                            title={'Interest Rate'}
                            prefix={'%'}
                            prefixPosition={'right'}
                            name={'interest_rate'}
                        />
                    </div>
                    <RadioGroup />
                </div>
                <PrimaryButton />
            </form>
        </div>

    )
}

export default Form;