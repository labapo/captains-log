import React, { Component } from 'react'

export default class Show extends Component {
  render() {
  let log = this.props.log
    return (
      <div>
        <h1>Captain's log!</h1>
        Ship Name: {log.title} <br />
        Log Entry: {log.entry} <br />
        Is the ship broken? {log.shipIsBroken?'Yes': "No"}

      </div>
    )
  }
}
