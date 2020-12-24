/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
export const setQuizList = data => {
    return {
        type: 'SET_QUIZ_LIST',
        quizList: data
    };
};
export const setQuizQuestions = data => {
    return {
        type: 'SET_QUIZ_QUESTIONS',
        quizData: data
    };
};

export const updateCurrentQuestion = () => {
    return {
        type: 'UPDATE_CURRENT_QUESTION',
    };
};

export const markAnswers = (data) => {
    return {
        type: 'MARK_ANSWERS',
        data
    };
};

export const checkAnswers = (data) => {
    return {
        type: 'GET_ANSWERS',
        data
    };
};

export const resetQuiz = () => {
    return {
        type: 'RESET_GAME',
    };
};
