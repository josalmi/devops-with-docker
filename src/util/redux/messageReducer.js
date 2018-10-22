import callBuilder from '../apiConnection'
/**
 * Actions and reducers are in the same file for readability
 */

export const postMessage = message => {
  const route = '/messages'
  const prefix = 'CREATE_MESSAGE'
  return callBuilder(route, prefix, 'post', message)
}

// Reducer
// You can include more app wide actions such as "selected: []" into the state
export default (state = { data: [] }, action) => {
  switch (action.type) {
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
        data: [...state.data.filter(item => item.id !== action.response.id), action.response],
        pending: false,
        error: false,
      }
    default:
      return state
  }
}
