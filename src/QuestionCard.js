import data from "./data/questions.json";
import Option from "./Option";
import { useState, useEffect } from "react";


const QuestionCard = () => {

    const [question, setQuestion] = useState(data[0]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isNew, setIsNew] = useState(true);

    useEffect(() => {
        setQuestion(data[questionIndex]);
    }, [questionIndex]);
    

    const moveIndex = (index) => {
        setQuestionIndex(questionIndex + index);
        setIsNew(true);
    };

    const randomQuestion = () => {
        let randomIndex = Math.floor(Math.random() * data.length);
        setQuestionIndex(randomIndex);
    };

    return (
        <div className="question-card">
            <div className="question-text">Q{question.serial_num}. &nbsp;{question.question_text}</div>
            {(
                question.has_image ? <img src={question.image_src} alt="link"></img> : ""    
            )}
            {/* {(
                question.options.map((opt, index) => {
                    return <div key={opt.option}
                        className="option-item"
                        style={{ backgroundColor: correctGuessed && opt.option == question.correct_option ? '#66FF66' : ''}}
                        onClick={() => isCorrect(opt.option, question.correct_option)}>{opt.option_text}</div>
                })
            )} */}
            {(
                question.options.map((opt, index) => {
                    return <Option answerText={opt.option_text} key={opt.option} isCorrect={opt.option === question.correct_option} isNew={isNew}/>
                })
            )}
            
            <button onClick={() => moveIndex(-1)} className="btn btn-primary next-button" disabled={(questionIndex <=0)? true:false}>&lt;&lt; Prev</button>&nbsp;&nbsp;
            <button onClick={() => moveIndex(1)} className="btn btn-primary next-button" disabled={(questionIndex === data.length - 1)? true:false}>Next &gt;&gt;</button>&nbsp;&nbsp;
            <button onClick={() => randomQuestion()} className="btn btn-warning next-button">Random ↻</button>
        </div>
    );

    

};

export default QuestionCard;