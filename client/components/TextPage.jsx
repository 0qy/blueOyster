import React from 'react'
import ReactMarkdown from 'react-markdown'

import { text } from '../textMarkdown'

const TextPage = () => {
  return(
    <div>
    <ReactMarkdown source={text} />
    <pre><i>{`
      what is here is
      open, as much as
      this there   🜘
                 





    `}</i></pre>
    <pre>{`
                             what is  sank
                                    pregnant of   /darkmucous
                                      limit ply  . ing
                                  stick it-    eyes accord
                                    mouths          corpos
                                        trap nervousbloom
                                    sticky   circuitreach
                                      parlour fresh   step
                                             seamd finger   . stoned
                                                            . flow
                                                             i'm riddled !                          
                                                                within it
    `}</pre>
    </div>
  )
}

export default TextPage