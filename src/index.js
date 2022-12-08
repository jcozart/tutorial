import React from 'react'
import ReactDom from 'react-dom'
// CSS import
import './index.css'


// Setup variables
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/51uYhoxbcqL._AC_SY135_.jpg',
  title: 'Network+',
  author: 'Beau Dedmond'

}
const secondBook = {
 title: 'Security+',
 author: 'Jordan Cozart',
 img: 'https://m.media-amazon.com/images/I/41gsBLfjtkL._AC_SY135_.jpg'
}

function BookList(){
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return ( 
    <article className='book'>
      <img src={props.img} alt=''/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))