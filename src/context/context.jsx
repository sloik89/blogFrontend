import React, { useState, useEffect, useContext, useReducer } from "react";
import { LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS } from "./actions";
import axios from "axios";
import reducer from "./reduces";
const initial_state = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
export const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const loginForm = async (user) => {
    console.log(user);
    dispatch({ type: LOGIN_START, payload: user });
    try {
      const res = await axios.post("/api/auth/login", user);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: LOGIN_FAILED });
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <UserContext.Provider value={{ ...state, loginForm }}>
      {children}
    </UserContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(UserContext);
};
