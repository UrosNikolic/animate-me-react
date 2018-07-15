import React from 'react'
import { render } from 'react-dom'
import AnimateMe from '../../lib'
import './styles.css'

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
        <div style={{marginTop: '1500px'}}>
            <AnimateMe
                transitionDuration={3.5}
                opacity={0.1}
                transform={'translateX(750px)'}>
                <h3>teeest</h3>
            </AnimateMe>
        </div>
    </div>
  )
}

render(<Demo />, document.getElementById('app'))
