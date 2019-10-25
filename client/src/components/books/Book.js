import React from 'react';
import { useSelector } from 'react-redux';

function Book() {
  const books = useSelector(state => state.books)
  console.log(books)

  return (
    <div className='bookContainer'>
    {books.map((book, index) => (
      <div className='book'>
        <div className='bookImage' key={index}>
          <img src={book.image} alt={book.title} />
          <h3>ISBN13: {book.isbn13}</h3>
        </div>
        <div className='bookDetails'>
          <h2>{book.title}</h2>
          <h3>Price: {book.price}</h3>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Book;