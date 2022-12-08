import React from 'react'
import ReactDom from 'react-dom'
// CSS import
import './index.css'


const books = [
  {
    img: 'https://m.media-amazon.com/images/I/51uYhoxbcqL._AC_SY135_.jpg',
    title: 'Network+',
    author: 'Beau Dedmond'
  },
  {
    title: 'Security+',
    author: 'Jordan Cozart',
    img: 'https://m.media-amazon.com/images/I/41gsBLfjtkL._AC_SY135_.jpg',
  }
]

const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})
console.log(newNames)
function BookList(){
  return (
    <section className='booklist'>
      {newNames}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return ( 
    <article className='book'>
      <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))