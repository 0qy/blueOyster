import React from 'react'

import TextPage from './TextPage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { titleVisibe: true }
  }

  clickHandler = () => {
    this.setState({
      titleVisibe: false
    })
  }

  render(){
    return (
      <div>
        {this.state.titleVisibe
          ? <button id="start" onClick={this.clickHandler}>start</button>
          : <TextPage/>
        }
      </div>
    )
  }
}

export default App
