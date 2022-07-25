import data from "./data/questions.json"
import { useState, useEffect } from "react";


const QuestionCard = () => {

    const [question, setQuestion] = useState(data[0]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctGuessed, setCorrectGuessed] = useState(false);

    useEffect(() => {
        setQuestion(data[questionIndex]);
    }, [questionIndex]);
    

    const moveIndex = (index) => {
        setCorrectGuessed(false);
        setQuestionIndex(questionIndex + index);
    };

    const isCorrect = (opt, correct) => {
        console.log(opt == correct);
        setCorrectGuessed(opt == correct);
        return opt == correct;
    };

    return (
        <div className="question-card">
            <div className="question-text">Q{question.serial_num}. &nbsp;{question.question_text}</div>
            {(
                question.has_image ? <img src={question.image_src}></img> : ""    
                
            )}
            {(
                question.options.map((opt, index) => {
                    return <div key={opt.option}
                        className="option-item"
                        style={{ backgroundColor: correctGuessed && opt.option == question.correct_option ? '#66FF66' : ''}}
                        onClick={() => isCorrect(opt.option, question.correct_option)}>{opt.option_text}</div>
                })
            )}
            
            <button onClick={() => moveIndex(-1)} className="btn btn-primary next-button" disabled={(questionIndex <=0)? true:false}>&lt;&lt; Previous</button>&nbsp;&nbsp;
            <button onClick={() => moveIndex(1)} className="btn btn-primary next-button" disabled={(questionIndex == data.length - 1)? true:false}>Next &gt;&gt;</button>
        </div>
    );

    

};

export default QuestionCard;