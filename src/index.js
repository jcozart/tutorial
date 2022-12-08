import React from 'react'
import ReactDom from 'react-dom'
// CSS import
import './index.css'

// Nested Components, React Tools

function BookList(){
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = () => {
  return ( 
    <article className='book'>
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
    <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Jordan Cozart</h4>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))