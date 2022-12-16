import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Page Yay!</h1>
        <form action="/logs" method="post">
        Title: <input type="text" name="title" />
        Entry: <input type="text" name="entry" />
        Is the Ship Broken? <input type="checkbox" name="shipIsBroken" />
        <input type="submit" value="SUBMIT" />
        </form>
      </div>
    )
  }
}

module.exports = New;
