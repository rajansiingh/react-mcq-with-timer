/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import { combineReducers } from 'redux';
import quizState from './qna';

export default function createReducer() {
    return combineReducers({
        quizState,
    });
}
