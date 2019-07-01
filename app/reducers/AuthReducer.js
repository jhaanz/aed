const INITIAL_STATE = { email: '', password: ''};

export default (state = INITIAL_STATE,action) => {
  switch (action.type) {
    case 'email_change':
      return { ...state, email: action.payload };
    case 'password_change':
      return { ...state, password: action.payload };

    default:
      return state;
  }
}
