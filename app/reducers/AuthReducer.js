const INITIAL_STATE = { email: '', password: '', user: null};

export default (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case 'email_change':
      return { ...state, email: action.payload };
    case 'password_change':
      return { ...state, password: action.payload };
    case 'LOGIN_USER_SUCCESS':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
