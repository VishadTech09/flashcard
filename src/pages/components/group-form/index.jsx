import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FlashcardForm from './../flashcard-form/index';
const FlashcardGroupForm = (props) => {
    return <div className='container-md'>
        <h4>Flashcard Group create</h4>
        <div className="card">
            <div className="card-body">
                <form action="">
                    <div class="mb-3">
                        <label for="groupInput" className="form-label fw-bold">Create Group</label>
                        <input type="text" className="form-control" id="groupInput" placeholder="Group name" />
                    </div>
                    <div class="mb-3">
                        <label for="groupDescription" className="form-label fw-bold">Add Description</label>
                        <textarea className="form-control" id="groupDescription" placeholder="Enter group description" rows="5" />
                    </div>
                </form>
            </div>

        </div>
        <FlashcardForm />
    </div>
}
export default FlashcardGroupForm;