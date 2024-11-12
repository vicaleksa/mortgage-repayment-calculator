import React from "react";
import styles from './style.module.css';

function Radio(
    {
        text,
        name,
        value,
        checked,
        handleChange
    }
) {
    return (
        <label htmlFor={value} className={styles.radioLabel}>
            <input
                type='radio'
                className="visually-hidden"
                id={value}
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            <span className={styles.radio}></span>
            <span className={styles.radioTitle}>{text}</span>
        </label>
    )
}

export default Radio;