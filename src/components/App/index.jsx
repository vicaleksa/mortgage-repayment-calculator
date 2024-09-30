import React, { useState } from 'react';
import styles from './style.module.css';
import Form from '../Form';
import Results from '../Results';


function App() {
    const [result, setResult] = useState({monthly: 0, total: 0});

    return (
        <div className={styles.app}>
            <Form />
            <Results result={result} />
        </div>
    )
}

export default App;