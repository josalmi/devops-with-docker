import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

import { testConnection } from '../../util/redux/simpleReducer'

class Exercise_1_5 extends Component {
  handleTestConnection = this.props.testConnection
  
  render() {
    const works = this.props.connectionTest.data === 'pong'
    return (
        <div>
          <span> Exercise 1.5: </span>
          <Button color={works ? "green" : "orange"} onClick={this.handleTestConnection} disabled={this.props.connectionTest.pending}>
            Press to Test!
          </Button>
          {works ? 'Working!' : 'Not yet working'}
        </div>
    )
  }
}

const mapStateToProps = ({ connectionTest }) => ({
  connectionTest: connectionTest,
})

const mapDispatchToProps = dispatch => ({
  testConnection: () => dispatch(testConnection())
})

export default connect(mapStateToProps, mapDispatchToProps)(Exercise_1_5)
