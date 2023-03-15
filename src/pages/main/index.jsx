
import Header from './components/header/index'
import Dashboard from '../dashboard';
import FlashCardGroups from './../flashcard-groups/index';
import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <>
                <Header />
                {
                    dashboard ? <Dashboard /> : <FlashCardGroups />
                }



            </>
        )
    }
}

export default Main;