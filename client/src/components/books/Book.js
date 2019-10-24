import React from 'react';
import { useSelector } from 'react-redux';

function Book() {
  const books = useSelector(state => state.books)
  console.log(books)

  return (
    <>
    {books.map((book, index) => (
        <div className='bookContainer'>
        <div className='bookImage' key={index}>
          <img src={book.image} alt={book.title} />
        </div>
        <h1>Title: {book.title}</h1>
        <h3>Price: {book.price}</h3>
      </div>
    ))}
    </>
  )
}

export default Book;