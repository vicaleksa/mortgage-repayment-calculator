import React, { useState } from 'react';
import styles from './style.module.css';
import Form from '../Form';
import Results from '../Results';


function App() {
    const [result, setResult] = useState(null);

    const onSubmit = (result) => setResult(result);

    return (
        <div className={styles.app}>
            <Form onSubmit={onSubmit} />
            <Results result={result} />
        </div>
    )
}

export default App;