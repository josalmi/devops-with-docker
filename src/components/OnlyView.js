import React, { Component } from 'react'

import MessageComponent from './MessageComponent'

export default class OnlyView extends Component {
    render = () => {
      return (
        <div>
          <MessageComponent />
        </div >
      )
    }
}
