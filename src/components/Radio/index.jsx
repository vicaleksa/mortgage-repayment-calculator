import React from "react";
import styles from './style.module.css';

function Radio({name, text}) {
    return (
        <label htmlFor={name} className={styles.radioLabel}>
            <input type="radio"
                className="visually-hidden"
                id={name}
                name="mortgage_type"
                value={name}
            />
            <span className={styles.radio}></span>
            <span className={styles.radioTitle}>{text}</span>
        </label>
    )
}

export default Radio;