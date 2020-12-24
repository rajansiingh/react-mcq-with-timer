/**
 * Author : rajansingh
 * Created On : 24/12/20
 */
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import DefaultLayout from "../../layout/DefaultLayout";
import data from '../../stubs/questions'
import {markAnswers, setQuizQuestions, updateCurrentQuestion} from "../../actions/qna_act";
import Result from "../../components/Result/Result";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import QuestionCount from "../../components/QuestionCount/QuestionCount";
import {httpFetch} from "../../services/http";
import {API_ENDPOINTS} from "../../constants/urlManager";

function QNA() {
    const dispatch = useDispatch();
    let {id} = useParams();

    useEffect(() => {
        httpFetch(`${API_ENDPOINTS.ALL_QUESTIONS}/${id}`, {
            stub: true,
            stubInfo: data
        }).then((data) => {
            dispatch(setQuizQuestions(data))
        });
    }, []);

    const saveAndUpdate = (answer) => {
        dispatch(markAnswers(answer))
        dispatch(updateCurrentQuestion())
    }
    const quizState = useSelector(state => state.quizState) || {};
    const {quizData, currentQuestion, answers} = quizState;
    const {questions = []} = quizData;

    return (
        <DefaultLayout>
            <header className="App-header">
                <h1>{quizData.name}</h1>
                <h5>{quizData.description}</h5>
            </header>
            {questions[currentQuestion]
                ? <div className='quiz-container'>
                    <QuestionCount counter={currentQuestion + 1} total={questions.length}/>
                    <QuestionCard question={questions[currentQuestion]} onAnswer={saveAndUpdate}/>
                </div>
                : answers.length > 0 && <Result/>}
        </DefaultLayout>
    );
}

export default QNA;
