import React from 'react'
import ReactDom from 'react-dom'
// CSS import
import './index.css'


const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/51uYhoxbcqL._AC_SY135_.jpg',
    title: 'Network+',
    author: 'Beau Dedmond'
  },
  {
    id: 2,
    title: 'Security+',
    author: 'Jordan Cozart',
    img: 'https://m.media-amazon.com/images/I/41gsBLfjtkL._AC_SY135_.jpg',
  },
  {
    id: 3,
    title: 'Security+ Study Guide',
    author: 'Brandon Shadrick',
    img: 'https://m.media-amazon.com/images/I/5185gwoiZ3L._AC_SY135_.jpg'
  }
]

function BookList(){
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
        <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props

  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    alert('Hello World')
  }

  const complexExample = (author) => {
    console.log(author)
  }

  return ( 
    <article className='book' onMouseOver={() => {
      console.log(title)
    }}>
      <img src={img} alt=''/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Reference Example</button>
      <button type='button' onClick={() => complexExample(author)}>More complex example</button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))