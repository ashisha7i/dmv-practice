import { useState } from "react";

const Option = (props) => {

    const [clazz, setClazz] = useState("");

    const handleClick = (p) => {
        console.log(p);
        if(p.isNew){
            setClazz(p.isCorrect ? "correct": "incorrect");
        }
    };


    return (
        <div key={props.keyId} onClick={() => handleClick(props)} className={ `option-item ${clazz}`}>
            {props.answerText}
        </div>
    );
}

export default Option;