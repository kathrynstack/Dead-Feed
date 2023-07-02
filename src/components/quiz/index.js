import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

// Quiz questions 
const Quiz = () => {
    const questions = [
        {
            question: 'Which horror movie setting do you prefer?',
            options: [
                {
                    text: 'Haunted House',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYko4x0RrxTHasEKmAOXLrDMxfW0GKxrC7ww&usqp=CAU',
                    score: 5,
                },
                {
                    text: 'Creepy Forest',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkQP8kvlh9VoFcHiypCGTqj_Y83--h6L3sw&usqp=CAU',
                    score: 1,
                },
                {
                    text: 'Abandoned Asylum',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1WDyo_oXlcbGJ05VfXOwRWKHgjD6Acap_w&usqp=CAU',
                    score: 12,
                },
            ],
        },
        {
            question: 'Do you enjoy parties?',
            options: [
                {
                    text: 'Not at all',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELHFK7P9THhySf4KOmhBKZhlG9znQdyDXlg&usqp=CAU',
                    score: 1,
                },
                {
                    text: 'Very Much',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9AwJcBNpiUcyJBKyXHdczRzAqShT4iGYRg&usqp=CAU',
                    score: 1,
                },
                {
                    text: 'Life of the party',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXhRLqlfwc_FApI9hJ_iyLmSLUQLhPm4IQg&usqp=CAU',
                    score: 1,
                },
            ],
        },
        {
            question: 'What type of weapon would you use?',
            options: [
                {
                    text: 'Chainsaw',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3zfZmsV_zsk1z9zdEPtKgg9k_wBFeD3iUdxY22f4Kdois3qO88Be-nIuU9uTGe0MWUU&usqp=CAU',
                    score: 1,
                },
                {
                    text: 'Knife',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWJUxKaqNxCqLw0v2rtJcYrKyWBpNdjd5gQ&usqp=CAU',
                    score: 7,
                },
                {
                    text: 'Axe',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiqiwbFP27ue0pZKFpjGinFJWcngaGi3qtA&usqp=CAU',
                    score: 1,
                },
            ],
        },
        {
            question: 'How talkative are you?',
            options: [
                {
                    text: 'Not at all',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELHFK7P9THhySf4KOmhBKZhlG9znQdyDXlg&usqp=CAU',
                    score: 1,
                },
                {
                    text: 'Very',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNtPfiXDVDZabXJDhywXIw1-PbyZiLSCmzw&usqp=CAU',
                    score: 1,
                },
                {
                    text: 'Life of the party',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXhRLqlfwc_FApI9hJ_iyLmSLUQLhPm4IQg&usqp=CAU',
                    score: 1,
                },
            ],
        },
        {
            question: 'What is your style?',
            options: [
                {
                    text: 'Sweatshirts',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYOQLPNo_EKCpPYQKwugU3n-PrH3MgL3AZ8jzzOlBnM2WMOsTPcs75UnmMSiCrWOgR-ic&usqp=CAU',
                    score: 10,
                },
                {
                    text: 'Button Down',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_2EMZcC2C2H8wIb8BrdddROf75OdQoCuvJjuIq7RBD6kDAqgRQwkkA9QXRiCYF7uRTE&usqp=CAU',
                    score: 4,
                },
                {
                    text: 'Relaxed',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JCeXvXBl08grS7SW6OTcfryKOuZ0LkXvag&usqp=CAU',
                    score: 1,
                },
            ],
        },
    ];

    //Character list
    const characters = [
        {
            name: 'Ghostface',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/scream-ghostface_400x400_scaled_cropp.jpg',
            description: 'You are a silent and remorseless killer, who enjoys stalking victims with a kitchen knife.',
        },
        {
            name: 'Chucky',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/New_Chucky.png',
            description: 'You are a possessed doll who will stop at nothing to get revenge on your enemies.',
        },
        {
            name: 'Jigsaw',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/Screen%20shot%202013-08-02%20at%204.55.45%20PM_400x400_scaled_cropp.jpg',
            description: 'You never intend to kill your subjects; you trap them to see if they will "Live or Die".',
        },
        {
            name: 'Freddy',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/freddy-krueger_400x400_scaled_cropp.jpg',
            description: 'You invade dreams and haunt people with your razor-sharp glove.',
        },
        {
            name: 'Hannibal',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/hanniballlecter_400x400_scaled_cropp.jpg',
            description: 'You enjoy tormenting your victims eating their flesh and look classy doing it.',
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [characterResult, setCharacterResult] = useState(null);

    const handleOptionClick = (score) => {
        setSelectedOption(score);
    };

    const handleNextQuestion = () => {
        if (selectedOption !== null) {
            setScore(score + selectedOption);
            setSelectedOption(null);
        }
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // character based on the score
            const resultCharacter = characters.find((character) => character.name === getCharacterName());
            setCharacterResult(resultCharacter);
            setShowResult(true);
        }
    };

    const getCharacterName = () => {
        // character name based on the score
        if (score <= 5) {
            return 'Chucky';
        } else if (score <= 8) {
            return 'Jigsaw';
        } else if (score <= 11) {
            return 'Ghostface';
        } else if (score <= 14) {
            return 'Freddy';
        } else if (score <= 16) {
            return 'Hannibal';
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setCharacterResult(null);
        setShowResult(false);
    };

    return (
        <div className="quiz-container">
            {showResult ? (
                <div className="result-container">
                    <h2>Horror Character</h2>
                    <h3>You are {characterResult.name}!</h3>
                    <img src={characterResult.imageUrl} alt="Character" />
                    <p>{characterResult.description}</p>
                    <button onClick={restartQuiz}>Dare to restart?</button>
                </div>
            ) : (
                <div className="question-container">
                    <h2>Horror Character Quiz</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <div className="options-container">
                        {questions[currentQuestion].options.map((option, index) => (
                            <div key={index} className="option">
                                <img
                                    src={option.imageUrl}
                                    alt={`Option ${index + 1}`}
                                    onClick={() => handleOptionClick(option.score)}
                                    className={selectedOption === option.score ? 'selected' : ''}
                                />
                                <span>{option.text}</span>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNextQuestion} disabled={selectedOption === null}>
                        {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
