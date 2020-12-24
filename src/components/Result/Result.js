/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {checkAnswers} from "../../actions/qna_act";
import data from "../../stubs/answers";
import {httpFetch} from "../../services/http";
import {API_ENDPOINTS} from "../../constants/urlManager";

function Result() {
    const dispatch = useDispatch();
    useEffect(() => {
        httpFetch(API_ENDPOINTS.RESULTS, {
            stub: true,
            stubInfo: data
        }).then((data) => {
            dispatch(checkAnswers(data))
        });
    }, []);
    const quizState = useSelector(state => state.quizState) || {};
    const {result} = quizState;
    const {
        correct = [],
        incorrect = [],
        unanswered = []
    } = result;
    return (
        <div className='quiz-container'>
            <h2>Thanks for Submitting the Quiz !! </h2>
            <h3>You have {correct.length} correct answers, {incorrect.length} incorrect answers
                and {unanswered.length} unattempted questions.
                <Link to='/' className='button'>Try another Quiz !!</Link>
            </h3>
        </div>
    );
}

export default Result;
