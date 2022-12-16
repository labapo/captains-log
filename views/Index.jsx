import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    const log = this.props.log
    return (
      <div>
        <h1>Captain's Log</h1>
        <nav>
            <a href="/logs/new">Enter New Log Item</a>
        </nav>
        <body>
            <ul>
               
            </ul>
        </body>
      </div>
    )
  }
}
