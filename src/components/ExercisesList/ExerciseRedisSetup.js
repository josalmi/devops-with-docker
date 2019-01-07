import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios'

class ExerciseRedisSetup extends Component {
  state = {
    pending: false,
    success: false,
    responseTime: undefined,
    error: false
  }

  testConnection = async () => {
    this.setState({ pending: true, error: false, success: false })
    const beforeRequest = (new Date()).getTime()
    try {
      const res = await axios.get(process.env.API_URL + '/slow')
      const afterRequest = (new Date()).getTime()
      const diffSeconds = (afterRequest - beforeRequest) / 1000
      if (res.data !== "pong") {
        throw new Error('Not pong')
      }
      if (diffSeconds > 1) {
        throw new Error('Too slow')
      }
      this.setState({ pending: false, success: true, responseTime: diffSeconds })
    } catch (err) {
      let error
      const afterRequest = (new Date()).getTime()
      const diffSeconds = (afterRequest - beforeRequest) / 1000

      if (err && err.response && err.response.status === 404) {
        error = "Request sent to unknown address, 404. Check network tab where the request was sent."
      }
      if (err.message === 'Not pong') {
        error = "Response was not what was expected. Check network tab where the request was sent."
      }
      if (err.message === 'Too slow') {
        error = "Response was correct but it was slow, did you set up the cache correctly?"
      }
      this.setState({ error, pending: false, responseTime: diffSeconds })
    }
  }

  message = () => {
    const { responseTime, success, error } = this.state
    const timeString = responseTime ? `It took ${responseTime} seconds.` : ''
    if (error) return `Not working correctly. ${timeString} ${error}`
    if (success) return `Working! ${timeString}`
    return timeString
  }

  render() {
    return (
      <div>
        <span> Exercise {this.props.exerciseNumber}: </span>
        <Button color={this.state.success ? "green" : "orange"} onClick={this.testConnection} disabled={this.state.pending}>
          Press to Test!
        </Button>
        {this.message()}
        <br/>
      </div>
    )
  }
}


export default ExerciseRedisSetup
