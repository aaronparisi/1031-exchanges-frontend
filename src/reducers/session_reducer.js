import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER
} from '../actions/session_actions'

const _nullSession = {
  currentUser: null,
  madeRatings: []
}

const sessionsReducer = (state = _nullSession, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(
        {}, 
        state, 
        { currentUser: action.user })
    case LOGOUT_CURRENT_USER:
      return _nullSession
    default:
      return state;
  }
}

export default sessionsReducer