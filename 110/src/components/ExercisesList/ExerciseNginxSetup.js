import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import axios from 'axios'

class ExerciseNginxSetup extends Component {

  state = {
    pending: false,
    success: false,
    error: false
  }

  testConnection = async () => {
    this.setState({ pending: true, error: false, success: false })
    try {
      const res = await axios.get('/api/ping')
      this.setState({ pending: false, success: res.data === "pong" })
    } catch (err) {
      this.setState({ error: true, pending: false })
    }
  }

  message = () => {
    if (this.state.error) return 'Not working correctly'
    if (this.state.success) return 'Working!'
    return ''
  }

  render() {
    return (
      <div>
        <span> Exercise {this.props.exerciseNumber}: </span>
        <Button color={this.state.success ? "green" : "orange"} onClick={this.testConnection} disabled={this.state.pending}>
          Press to Test!
        </Button>
        {this.message()}
      </div>
    )
  }
}

export default ExerciseNginxSetup
