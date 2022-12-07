import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return <h4>Hi I'm Jordan and this is my first REACT component</h4>
}

ReactDom.render(<Greeting />, document.getElementById('root'))