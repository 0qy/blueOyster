import React from 'react'

import TextPage from './TextPage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { titleVisibe: true }
  }

  clickHandler = () => {
    const audio = document.getElementById("startAudio")
    audio.play()
    audio.onplay = () => {
      audio.onended = () => {
        this.setState({
          titleVisibe: false
        })
      }
    }
  }


  isPlaying(audio) {
    return !audio.ended
  }

  render(){
    return (
      <div>
        {this.state.titleVisibe
          ? <div id="start">
              <img id="button" onClick={this.clickHandler} src="/startIcon.jpg"/>
              <audio id="startAudio" src="startSound.mp3"/>
            </div>
          : <TextPage/>
        }
      </div>
    )
  }
}

export default App
