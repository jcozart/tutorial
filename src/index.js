import React from 'react'
import ReactDom from 'react-dom'

// Nested Components, React Tools

function BookList(){
  return (
    <section>
      <Book/>
    </section>
  )
}

const Book = () => {
  return ( 
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img src='https://m.media-amazon.com/images/I/41gsBLfjtkL._AC_SY135_.jpg' alt=''/>
  )
}

const Title = () => {
  return (
    <h1>Security+</h1>
  )
}

const Author = () => {
  return (
    <h4>Jordan Cozart</h4>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))