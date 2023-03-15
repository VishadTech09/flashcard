import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FlashcardGroupForm from './../group-form/index';

class AppTabs extends React.Component {
    
    constructor(){

    }

    render() {
        return <div className="container-md">
            <h5 className="m-3">Create Flashcard</h5>
            <FlashcardGroupForm />
        </div >
    }
}
export default AppTabs;