import React, { useState } from 'react';
import styles from './style.module.css';
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';
import NumberField from '../NumberField';
import Radio from '../Radio';

function Form({ onSubmit }) {
    const [formData, setFormData] = useState(
        {
            mortgageAmount: '',
            mortgageTerm: '',
            interestRate: '',
            mortgageType: ''
        }
    )
    const [errors, setErrors] = useState (
        {
            mortgageAmount: null,
            mortgageTerm: null,
            interestRate: null,
            mortgageType: null
        }
    )

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const validateFormData = (formData) => {
        const newErrors = {
            mortgageAmount: null,
            mortgageTerm: null,
            interestRate: null,
            mortgageType: null
        };

        if (!formData.mortgageAmount) {
            newErrors.mortgageAmount = 'This field is required'
        }
        if (!formData.mortgageTerm) {
            newErrors.mortgageTerm = 'This field is required'
        }
        if (!formData.interestRate) {
            newErrors.interestRate = 'This field is required'
        }
        if (!formData.mortgageType) {
            newErrors.mortgageType = 'This field is required'
        }
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const countMonthlyAndTotal = () => {
            const monthlyInterestRate = formData.interestRate/100/12;
            const numberOfPayments = formData.mortgageTerm*12;
            if (formData.mortgageType === 'repayment') {
                const monthly = formData.mortgageAmount*((monthlyInterestRate*(1+monthlyInterestRate)**numberOfPayments)/((1+monthlyInterestRate)**numberOfPayments-1));
                console.log(monthly);
                const total = monthly*numberOfPayments;
                console.log(total);
                onSubmit({ monthly, total })
            }
            if (formData.mortgageType === 'interestOnly') {
                const monthly = formData.mortgageAmount*monthlyInterestRate;
                console.log(monthly);
                const total = monthly*numberOfPayments;
                console.log(total);
                onSubmit({ monthly, total })
            }
        }

        const newErrors = validateFormData(formData);
        setErrors(newErrors)

        console.log(newErrors)
        console.log(Object.values(newErrors))

        const errorsArray = Object.values(newErrors);

        const isValid = errorsArray.every(error => error === null)
        console.log(isValid)
        if (isValid) {
            countMonthlyAndTotal()
        }




    };

    return (
        <div className={styles.mortgageCalculator}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Mortgage Calculator
                </h1>
                <SecondaryButton />
            </div>
            <form onSubmit={handleSubmit} className={styles.form} action="" name='mortgage-calculator'>
                <div className={styles.inputGroup}>
                    <NumberField
                        title={'Mortgage Amount'}
                        prefix={'£'}
                        name={'mortgageAmount'}
                        value={formData.mortgageAmount}
                        handleChange={handleChange}
                        error={errors.mortgageAmount}
                    />
                    <div className={styles.fieldGroup}>
                        <NumberField
                            title={'Mortgage Term'}
                            prefix={'years'}
                            prefixPosition={'right'}
                            name={'mortgageTerm'}
                            value={formData.mortgageTerm}
                            handleChange={handleChange}
                            error={errors.mortgageTerm}
                        />
                        <NumberField
                            title={'Interest Rate'}
                            prefix={'%'}
                            prefixPosition={'right'}
                            name={'interestRate'}
                            value={formData.interestRate}
                            handleChange={handleChange}
                            error={errors.interestRate}
                        />
                    </div>
                    <fieldset className={styles.radioSet}>
                        <span className={styles.radioLegend}>Mortgage Type</span>
                        <Radio
                            text={'Repayment'}
                            name={'mortgageType'}
                            value={'repayment'}
                            checked={formData.mortgageType === 'repayment'}
                            handleChange={handleChange}
                        />
                        <Radio
                            text={'Interest Only'}
                            name={'mortgageType'}
                            value={'interestOnly'}
                            checked={formData.mortgageType === 'interestOnly'}
                            handleChange={handleChange}
                        />
                        {errors.mortgageType && <span className={styles.error}>{errors.mortgageType}</span>}
                    </fieldset>
                </div>
                <PrimaryButton />
            </form>
        </div>

    )
}

export default Form;