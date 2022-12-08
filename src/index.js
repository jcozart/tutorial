import React from 'react'
import ReactDom from 'react-dom'
// CSS import
import './index.css'

// Nested Components, React Tools

function BookList(){
  return (
    <section className='booklist'>
      <Book/>
    </section>
  )
}

const Book = () => {
  const title = 'Security+'
  const author = 'Jordan Cozart'
  return ( 
    <article className='book'>
      <img src='https://m.media-amazon.com/images/I/41gsBLfjtkL._AC_SY135_.jpg' alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))