import React, { useState, useEffect, useContext, useReducer } from "react";
import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from "./actions";
import axios from "axios";
import reducer from "./reduces";
const initial_state = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
  msg: "",
};
export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const logout = () => {
    dispatch({ type: LOGOUT });
    window.location.replace("/");
  };
  const loginForm = async (user) => {
    console.log(user);
    dispatch({ type: LOGIN_START, payload: user });
    try {
      const res = await axios.post("/api/auth/login", user);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err.response.data);
      dispatch({ type: LOGIN_FAILED, payload: err.response.data });
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <UserContext.Provider value={{ ...state, loginForm, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(UserContext);
};
