import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, List } from 'semantic-ui-react'

import { getMessages, postMessage } from '../../util/redux/messageReducer'

const INITIAL_STATE = {
  message: ''
}

class ExerciseDBConnection extends Component {
  state = INITIAL_STATE

  handleGetMessages = this.props.getMessages
  handlePostMessage = () => this.props.postMessage(this.state.message)
  handleChange = event => this.setState({ [event.target.id]: event.target.value })

  render() {
    const { messages } = this.props
    return (
      <div>
        <span> Exercise {this.props.exerciseNumber}:</span>
        <Input id='message'
          placeholder="Write message here"
          value={this.state.message}
          onChange={this.handleChange} />
        <Button color="purple" onClick={this.handlePostMessage}>
          Send message!
        </Button>
        <Button color="purple" onClick={this.handleGetMessages}>
          Get all messages!
        </Button>
        <List>
          {messages.map(message => <List.Item key={message.id}>{message.body}</List.Item>)}
        </List>
      </div>
    )
  }
}

const mapStateToProps = ({ messages }) => ({
  messages: messages.data.sort((a, b) => a.body.localeCompare(b.body)),
})

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessage({ message })),
  getMessages: () => dispatch(getMessages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseDBConnection)
