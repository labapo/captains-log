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
                      {log.title}
                    </a>
                  </li>
                )
              })}
            </ul>
        </body>
      </div>
    )
  }
}
