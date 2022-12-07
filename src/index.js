import React from 'react'
import ReactDom from 'react-dom'

// stateless functional component
// always must return JSX

// JSX Rules
// return single element
// div / section/ article or fragment
// use camelCase for html attributes (ex: onClick)
// className instead of class
// close every element
// formatting

function Greeting(){
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

// DONT DO THIS MUCH MORE DIFFICULT
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// 

ReactDom.render(<Greeting />, document.getElementById('root'))