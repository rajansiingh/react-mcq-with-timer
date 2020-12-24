/**
 * Author : rajansingh
 * Created On : 24/12/20
 */
import React from 'react';
import DefaultLayout from "../../layout/DefaultLayout";
import Timer from "../Timer/Timer";
import Button from "../AnswerOptions/AnswerOptions";

function QuestionCard(props) {
    const {
        question: {
            name,
            options = '',
            id
        },
        onAnswer
    } = props;

    const timeoutFn = (answer = {answer: '', id: id}) => {
        onAnswer(answer);
    }
    const answers = options.split(',');
    return (
        <DefaultLayout>
            <Timer timeoutFn={timeoutFn} key={id}/>
            <h2>{name}</h2>
            <footer>
                {answers.map((answer, i) => {
                    return (
                        <div className='btn-cont'><Button key={i} onClick={() => {
                            timeoutFn({answer, id})
                        }}>
                            {answer}
                        </Button>
                        </div>
                    );
                })}
            </footer>
        </DefaultLayout>
    );
}

export default QuestionCard;
