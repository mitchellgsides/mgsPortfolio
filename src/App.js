import React, { Component } from 'react'

class App extends Component {
  onChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <div>
        Hello, World!
      </div>
    )
  }
}

export default App
