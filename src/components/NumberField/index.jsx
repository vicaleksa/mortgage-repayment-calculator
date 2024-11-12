import React, { useState } from "react";
import styles from './style.module.css';

function NumberField(
    {
        title,
        prefix,
        prefixPosition = 'left',
        name,
        value,
        handleChange,
        error
    }
) {
    let inputWrapperClassName = `${styles.inputWrapper}`;
    if (prefixPosition === 'right') {
        inputWrapperClassName += ` ${styles.prefixRightPosition}`;
    }

    return (
        <div className={styles.numberField}>
            <label htmlFor={name}>{title}</label>
            <div className={inputWrapperClassName}>
                <div className={styles.prefix}>{prefix}</div>
                <input
                    type='number'
                    id={name}
                    name={name}
                    min={0}
                    className={styles.inputNumber}
                    value={value}
                    onChange={handleChange}
                />
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    )
}

export default NumberField;