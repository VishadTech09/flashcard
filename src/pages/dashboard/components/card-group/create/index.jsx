class CreateFlashcardGroup extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return <div>
            <label htmlFor="name">Create Group*</label>
            <input type="text" id="name" />

            <label>Add Description</label>
            <textarea cols="20" rows="4"></textarea>
        </div>
    }
}
export default CreateFlashcardGroup;