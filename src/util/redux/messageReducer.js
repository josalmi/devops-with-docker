import callBuilder from '../apiConnection'

export const postMessage = message => {
  const route = '/messages'
  const prefix = 'CREATE_MESSAGE'
  return callBuilder(route, prefix, 'post', message)
}

export const getMessages = () => {
  const route = '/messages'
  const prefix = 'GET_MESSAGES'
  return callBuilder(route, prefix)
}

export default (state = { data: [] }, action) => {
  switch (action.type) {
    case 'GET_MESSAGES_SUCCESS':
      return {
        ...state,
        data: action.response
      }
    case 'CREATE_MESSAGE_ATTEMPT':
      return {
        ...state,
        pending: true,
      }
    case 'CREATE_MESSAGE_FAILURE':
      return {
        ...state,
        pending: false,
        error: true,
      }
    case 'CREATE_MESSAGE_SUCCESS':
      return {
        ...state,
        pending: false,
        error: false,
      }
    default:
      return state
  }
}
