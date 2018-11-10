import React, { Component } from 'react'

class Exercise_1_3 extends Component {
    secretMessage = window.atob("Q29uZ3JhdHVsYXRpb25zISBZb3UgY29uZmlndXJlZCB5b3VyIHBvcnRzIGNvcnJlY3RseSE=")
    render() {
        return (
            <div>
                <span> Exercise 1.3: {this.secretMessage} </span>
            </div>
        )
    }
}

export default Exercise_1_3
