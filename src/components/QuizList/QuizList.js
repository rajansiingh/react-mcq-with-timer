/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {httpFetch} from "../../services/http";
import data from "../../stubs/quiz";
import {useDispatch, useSelector} from "react-redux";
import {resetQuiz, setQuizList} from "../../actions/qna_act";
import {API_ENDPOINTS} from "../../constants/urlManager";

function QuizList(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetQuiz());
        httpFetch(API_ENDPOINTS.ALL_MCQ, {
            stub: true,
            stubInfo: data
        }).then((data) => {
            dispatch(setQuizList(data))
        });
    }, []);
    const list = useSelector(state => state.quizState.quizList);
    return (
        <div>
            {list.map((data, index) => {
                return <div className='quiz-container' key={`${Math.random()}_${index}`}>
                    <h3>{data.name}</h3>
                    <span>{data.description}</span>
                    <Link to={`/quiz/${data.id}`} className='button'>Start Quiz</Link>
                </div>
            })}
        </div>
    );
}

export default QuizList;
