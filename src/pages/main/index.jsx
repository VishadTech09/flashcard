
import Header from './components/header/index'
import Dashboard from '../dashboard';
import FlashCardGroups from './../flashcard-groups/index';

function Main() {
    const dashboard = true;
    return (
        <>
            <Header />
            {
                dashboard ? <Dashboard /> : <FlashCardGroups />
            }



        </>
    )
}

export default Main;