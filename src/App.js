import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);
    const [selectedSections, setSelectedSections] = useState([]);

    const handleSubmit = async () => {
        try {
            const res = await axios.post('https://bajajtestshivanshu-ftwi.vercel.app//bfhl', JSON.parse(jsonInput));
            setResponse(res.data);
        } catch (error) {
            console.error('Error submitting JSON:', error);
        }
    };

    const handleMultiSelectChange = (event) => {
        const value = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedSections(value);
    };

    return (
        <div>
            <h1>ABCD123</h1>
            <textarea value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            {response && (
                <div>
                    <select multiple={true} onChange={handleMultiSelectChange}>
                        <option value="numbers">Numbers</option>
                        <option value="alphabets">Alphabets</option>
                        <option value="highest_alphabet">Highest Alphabet</option>
                    </select>
                    {selectedSections.includes('numbers') && <div>Numbers: {JSON.stringify(response.numbers)}</div>}
                    {selectedSections.includes('alphabets') && <div>Alphabets: {JSON.stringify(response.alphabets)}</div>}
                    {selectedSections.includes('highest_alphabet') && <div>Highest Alphabet: {JSON.stringify(response.highest_alphabet)}</div>}
                </div>
            )}
        </div>
    );
};

export default App;
