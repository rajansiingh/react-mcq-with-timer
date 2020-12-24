/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import React from 'react';
import DefaultLayout from "../../layout/DefaultLayout";
import QuizList from "../../components/QuizList/QuizList";

function Home() {
    return (
        <DefaultLayout>
            <header className="App-header">
                <h1>Welcome to Quiz</h1>
            </header>
            <QuizList/>
        </DefaultLayout>
    );
}

export default Home;
