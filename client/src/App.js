import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from './actions/books';
import Book from './components/books/Book';


function App() {
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <div className='App'>
      <h1>BOOK IT</h1>
      { isLoading ? <div className='spinner' /> : <Book /> }
    </div>
  )
}

export default App;