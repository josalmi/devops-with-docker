import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios'

class Exercise_2_3 extends Component {
  state = {
    pending: false,
    success: false,
    responseTime: undefined,
    error: false
  }

  testConnection = async () => {
    this.setState({ pending: true, error: false, success: false })
    try {
      const beforeRequest = (new Date()).getTime()
      const res = await axios.get(process.env.API_URL + '/slow')
      const afterRequest = (new Date()).getTime()
      const diffSeconds = (afterRequest - beforeRequest) / 1000
      const success = res.data === "pong" && diffSeconds < 10 
      this.setState({ pending: false, success, responseTime: diffSeconds })
    } catch (err) {
      this.setState({ error: true, pending: false })
    }
  }

  message = () => {
    const timeString = this.state.responseTime ? `It took ${this.state.responseTime} seconds` : ''
    if (this.state.error) return `Not working correctly. ${timeString}`
    if (this.state.success) return `Working! ${timeString}`
    return timeString
  }

  render() {
    return (
      <div>
        <span> Exercise 2.3: </span>
        <Button color={this.state.success ? "green" : "orange"} onClick={this.testConnection} disabled={this.state.pending}>
          Press to Test!
        </Button>
        {this.message()}
        <br/>
      </div>
    )
  }
}


export default Exercise_2_3
