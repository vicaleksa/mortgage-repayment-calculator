import React from 'react';
import './style.css';
import SecondaryButton from '../SecondaryButton';
import PrimaryButton from '../PrimaryButton';

function Form() {
    return (
        <div className="mortgage-calculator">
            <div className='header'>
                <h1 className='mortgage-calculator__title'>
                    Mortgage Calculator
                </h1>
                <SecondaryButton />
            </div>
            <form className='mortgage-calculator__form' action="" name='mortgage-calculator'>
                <div className='mortgage-amount'>
                    <label htmlFor="mortgage-amount" className='label__text'>
                        Mortgage Amount
                    </label>
                    <div className='prefix__input'>Prefix</div>
                    <input
                        type="number"
                        id='mortgage-amount'
                        name='mortgage-amount'
                        className='input__number input__number_prefix'
                    />
                </div>
                <PrimaryButton />
            </form>
        </div>

    )
}

export default Form;