import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./actions";
const reducer = (state, action) => {
  if (action.type === LOGIN_START) {
    return { ...state, user: null, isFetching: true, error: false };
  }
  if (action.type === LOGIN_FAILED) {
    console.log("login falilded");
    return { ...state, user: null, isFetching: false, error: true };
  }
  if (action.type === LOGIN_SUCCESS) {
    console.log("login succes");
    console.log(action.payload);
    return { ...state, user: action.payload, isFetching: false, error: false };
  }
  if (action.type === LOGOUT) {
    console.log("logout");
    return { ...state, user: null, isFetching: false, error: false };
  }
  return state;
};
export default reducer;
