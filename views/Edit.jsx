import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const log = this.props.log
    return (
      <div>
        <h1>Edit Page</h1>
        <nav>
            <a href="/logs">Cancel Edit</a>
        </nav>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
        Title: <input type="text" name="title" defaultValue={log.title} /> <br />
        Entry: <input type="text" name="entry" defaultValue={log.entry}/> <br />
        Is the Ship Broken: <input type="checkbox" name="shipIsBroken" /> <br />
        <input type="submit" value="SUBMIT EDIT" />
        </form>
      </div>
    )
  }
}
