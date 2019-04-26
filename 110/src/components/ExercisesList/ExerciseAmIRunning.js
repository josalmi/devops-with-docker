import React, { Component } from 'react'

class ExerciseAmIRunning extends Component {
    secretMessage = window.atob("Q29uZ3JhdHVsYXRpb25zISBZb3UgY29uZmlndXJlZCB5b3VyIHBvcnRzIGNvcnJlY3RseSE=")
    render() {
        return (
            <div>
                <span> Exercise {this.props.exerciseNumber}: {this.secretMessage} </span>
            </div>
        )
    }
}

export default ExerciseAmIRunning
