import firebase from 'firebase'

export const emailChanged = (text) => {
  return {
    type: 'email_change',
    payload: text
  };
};
export const passwordChanged = (text) => {
  return {
    type: 'password_change',
    payload: text
  };
};
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch ({
      type: 'LOGIN_USER_SUCCESS',
      payload: user
  });
};
const loginUserFail = (dispatch) => {
  dispatch ({
      type: 'LOGIN_USER_FAIL'
  });
};
