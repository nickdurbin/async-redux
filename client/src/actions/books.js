import axios from 'axios'

export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR'

export const getBooks = () => dispatch => {
  dispatch({ type: GET_BOOKS_REQUEST })
  axios
    .get(`https://api.itbook.store/1.0/search/${category}/${page}`)
    .then(res =>
      dispatch({ type: GET_BOOKS_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: GET_BOOKS_ERROR, payload: err }))
}