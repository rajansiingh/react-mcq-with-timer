/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
const initialState = {
    quizList: [],
    quizData: [],
    answers: [],
    currentQuestion: 0,
    result: {
        correct: [],
        incorrect: [],
        unanswered: []
    }
};

export default function quizState(state = initialState, action) {
    switch (action.type) {
        case 'SET_QUIZ_LIST':
            return {
                ...state,
                quizList: action.quizList
            };
        case 'SET_QUIZ_QUESTIONS':
            return {
                ...state,
                quizData: action.quizData
            };
        case 'MARK_ANSWERS':
            return {
                ...state,
                answers: state.answers.concat(action.data)
            }
        case 'UPDATE_CURRENT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1
            }
        case 'GET_ANSWERS':
            const {data: correctAnswers} = action;
            const userAnswers = state.answers;
            const ua = [], ca = [], ia = [];
            correctAnswers.forEach((list) => {
                const usrRes = userAnswers.find(element => element.id === list.id);
                const usrResStr = usrRes && usrRes.answer.toLowerCase().trim();
                const correctAns = list.answer.toLowerCase().trim();
                if (usrRes) {
                    if (usrResStr === '') {
                        ua.push(usrRes);
                    } else if (usrResStr === correctAns) {
                        ca.push(usrRes);
                    } else {
                        ia.push(usrRes);
                    }
                }
            })
            return {
                ...state,
                result: {
                    correct: ca,
                    incorrect: ia,
                    unanswered: ua
                }
            }
        case 'RESET_GAME':
            return Object.assign({}, initialState);
        default:
            return state;
    }
};
