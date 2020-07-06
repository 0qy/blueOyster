import React from 'react'
import ReactMarkdown from 'react-markdown'

import { text } from '../textMarkdown'

const TextPage = () => {
  return(
    <div>
      <ReactMarkdown source={text} />
    </div>
  )
}

export default TextPage