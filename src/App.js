import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import './styles.css';

function App() {
    const [playerName, setPlayerName] = useState('');
    const [gameState, setGameState] = useState('welcome');
    const [gameResult, setGameResult] = useState(null); // null, 'won', 'lost'

    const startGame = (name) => {
        setPlayerName(name);
        setGameState('game');
    };

    const endGame = (result) => {
        setGameResult(result); // 'won' o 'lost'
        setGameState('result');
    };

    return (
        <div className="app-container">
            {gameState === 'welcome' && <WelcomeScreen onStartGame={startGame} />}
            {gameState === 'game' && <GameScreen playerName={playerName} onEndGame={endGame} />}
            {gameState === 'result' && <ResultScreen playerName={playerName} won={gameResult === 'won'} />}
        </div>
    );
}

export default App;