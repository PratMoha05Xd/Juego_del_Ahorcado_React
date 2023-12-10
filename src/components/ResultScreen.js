import React from 'react';
import '../styles.css';

function ResultScreen({ playerName, won }) {
    return (
        <div className={won ? "result-screen won" : "result-screen lost"}>
            {won ? 
                <div>¡Enhorabuena {playerName}, has ganado!</div> : 
                <div>Lo siento {playerName}, has perdido.</div>
            }
        </div>
    );
}

export default ResultScreen;
