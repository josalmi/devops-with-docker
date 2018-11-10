import callBuilder from '../apiConnection'

export const testConnection = () => {
  const route = '/ping'
  const prefix = 'GET_CONNECTION'
  return callBuilder(route, prefix)
}

export default (state = { data: "" }, action) => {
  switch (action.type) {
    case 'GET_CONNECTION_ATTEMPT':
      return {
        ...state,
        pending: true,
      }
    case 'GET_CONNECTION_SUCCESS':
      return {
        ...state,
        data: action.response,
        pending: false,
      }
    case 'GET_CONNECTION_FAILURE':
      return {
        ...state,
        pending: false,
      }
    default:
      return state
  }
}
