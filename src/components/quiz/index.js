import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

// Quiz questions 
const Quiz = () => {
    const questions = [
        {
            question: 'Do you enjoy parties?',
            options: [
                {
                    text: 'Not at all',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELHFK7P9THhySf4KOmhBKZhlG9znQdyDXlg&usqp=CAU',
                },
                {
                    text: 'Very Much',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9AwJcBNpiUcyJBKyXHdczRzAqShT4iGYRg&usqp=CAU',
                },
                {
                    text: 'Life of the party',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXhRLqlfwc_FApI9hJ_iyLmSLUQLhPm4IQg&usqp=CAU',
                },
            ],
            correctAnswerIndex: 0,
        },
        {
            question: 'How talkative are you?',
            options: [
                {
                    text: 'Not at all',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELHFK7P9THhySf4KOmhBKZhlG9znQdyDXlg&usqp=CAU',
                },
                {
                    text: 'Very',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNtPfiXDVDZabXJDhywXIw1-PbyZiLSCmzw&usqp=CAU',
                },
                {
                    text: 'Life of the party',
                    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXhRLqlfwc_FApI9hJ_iyLmSLUQLhPm4IQg&usqp=CAU',
                },

            ],
            correctAnswerIndex: 1,
        },
    ];

    //Character list
    const characters = [
        {
            name: 'MikeMyers',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/myers_400x400_scaled_cropp.jpg',
        },
        {
            name: 'Chucky',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/New_Chucky.png',
        },
        {
            name: 'Saw',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/Screen%20shot%202013-08-02%20at%204.55.45%20PM_400x400_scaled_cropp.jpg',
        },
        {
            name: 'Freddy',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/freddy-krueger_400x400_scaled_cropp.jpg',
        },
        {
            name: 'Scream',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/scream-ghostface_400x400_scaled_cropp.jpg',
        },
        {
            name: 'Pinhead',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/pinhead1_400x400_scaled_cropp.jpg',
        },
        {
            name: 'Hannibal',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/hanniballlecter_400x400_scaled_cropp.jpg',
        },
        {
            name: 'Friday the 13th',
            imageUrl: 'https://cdn.pastemagazine.com/www/blogs/lists/friday-the-13thx-large.jpg',
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleOptionClick = (optionIndex) => {
        setSelectedOption(optionIndex);
    };

    const handleNextQuestion = () => {
        if (selectedOption === questions[currentQuestion].correctAnswerIndex) {
            setScore(score + 1);
        }

        setSelectedOption(null);
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const getCharacter = () => {
        // Determine the character based on the score
        return characters[characters.length - 1];
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setShowResult(false);
    };

    return (
        <div>
            {showResult ? (
                <div>
                    <h2>Quiz Result</h2>
                    <p>Your character: {score}</p>
                    <img src={getCharacter().imageUrl} alt="Character" />
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <h2>Question {currentQuestion + 1}</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <div>
                        {questions[currentQuestion].options.map((option, index) => (
                            <div key={index}>
                                <img
                                    src={option.imageUrl}
                                    alt={`Option ${index + 1}`}
                                    onClick={() => handleOptionClick(index)}
                                    style={{ width: '100px', height: '100px', cursor: 'pointer' }}
                                />
                                {selectedOption === index && (
                                    <span>{option.text}</span>
                                )}
                            </div>
                        ))}
                    </div>
                    <button disabled={selectedOption === null} onClick={handleNextQuestion}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;





















