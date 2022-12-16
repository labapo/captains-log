import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    //const log = this.props.log
    return (
      <div>
        <h1>Captain's Log</h1>
        <nav>
            <a href="/logs/new">Enter New Log Item</a>
        </nav>
        <body>
            <ul>
              {this.props.log.map((log, i) =>{
                return(
                  <li key={i}>
                    <a href={`/logs/${log.id}`}>
                      {log.title}  </a><br />
                      {log.entry} <br />
                      {log.shipIsBroken?'Ship Broken': "Ship is not broken"}
                    <form action = 
                    {`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                    </form>
                    <form action = 
                    {`/logs/${log._id}/edit`}>
                    <input type="submit" value="EDIT" />
                    </form>
                  </li>
                )
              })}
            </ul>
        </body>
      </div>
    )
  }
}
