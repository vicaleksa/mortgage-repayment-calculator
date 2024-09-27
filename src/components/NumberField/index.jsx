import React from "react";
import styles from './style.module.css';

function NumberField({ title, prefix, prefixPosition = 'left', name }) {
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
                    required
                    className={styles.inputNumber}
                />
            </div>
            <span className={styles.error}>Error text</span>
        </div>
    )
}

export default NumberField;