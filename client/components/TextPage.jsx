import React from 'react'
import ReactMarkdown from 'react-markdown'

import { text } from '../textMarkdown'

const TextPage = () => {
  return(
    <div>
      <audio id="audio" autoPlay loop src="sound.mp3"/>
      <ReactMarkdown source={text} />
    </div>
  )
}

export default TextPage