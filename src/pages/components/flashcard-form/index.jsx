import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class FlashcardForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            term: "",
            description: ""
        };
        this.updateFlashcardFormState = this.updateFlashcardFormState().bind(this);
    }

    updateFlashcardFormState = (e) => {
        console.log("State to be update : ", e);
        this.setState(data);
    }

    render() {
        return <div className="card mt-3">
            <div className="card-body">
                <form action="">
                    <div className='row'>
                        <div class="col-md-4">
                            <label for="termInput" className="form-label fw-bold">Email</label>
                            <input type="text" className="form-control" id="termInput" onChange={this.updateFlashcardFormState} />
                        </div>
                        <div class="col-md-5">
                            <label for="termDescription" className="form-label fw-bold">Enter Description</label>
                            <textarea className="form-control" id="termDescription" />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label" for="inputfile">&nbsp;</label>
                            <input type="file" class="form-control" id="inputfile" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    }
}
export default FlashcardForm;