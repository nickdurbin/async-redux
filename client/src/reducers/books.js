import { GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_ERROR } from '../actions/books'

const initialState = {
    isLoading: false,
    error: '',
    books: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          books: action.payload.books
      }
    case GET_BOOKS_ERROR:
      return {
        ...state,
        isLoading: true,
        error: action.payload
      }
    default:
      return state
  }
}