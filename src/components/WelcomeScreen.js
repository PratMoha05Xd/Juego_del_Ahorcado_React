import React, { useState } from 'react';

function WelcomeScreen({ onStartGame }) {
    const [playerName, setPlayerName] = useState('');

    const handleStartGame = () => {
        if (playerName.trim()) {
            onStartGame(playerName);
        }
    };

    return (
        <div className="welcome-screen">
            <h1>Bienvenido al Juego del Ahorcado</h1>
            <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
            />
            <button onClick={handleStartGame}>Comenzar Juego</button>
        </div>
    );
}

export default WelcomeScreen;
