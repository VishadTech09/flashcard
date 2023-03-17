import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FlashcardGroupForm from './../group-form/index';
import React from "react";

class AppTabs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "Create Flashcard",
            showTime: true
        }

        /* this function will change state */
        this.changetitle = (e) => {
            this.setState({
                showTime: false
            })
            this.interval = setInterval(() => {
                const date = new Date().toLocaleTimeString('en-IN');
                this.setState({
                    title: `Create Flashcard : ${date}`
                }, () => {
                    console.log("State is successfully updated")
                });
            }, 1000);


        }
    }

    render() {
        return <div className="container-md">
            <h5 className="m-3">{this.state.title}
                {this.state.showTime ?
                    <button className="btn btn-warning m-3" onClick={this.changetitle}>Show Time!</button> : null}
            </h5>

            <FlashcardGroupForm />
        </div >
    }
}
export default AppTabs;