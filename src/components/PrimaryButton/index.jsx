import React from 'react';
import './style.css';
import Calculator from '/src/svg/calculator.svg';


function PrimaryButton() {
    return (
        <button className='btn-primary'>
            <img src={Calculator} alt="" />
            Calculate Repayments
        </button>
    )
}

export default PrimaryButton;