// Setting up data layout which is going to allow us to store basket information

// we need this to trackt the basket

import React, { createContext, useContext, useReducer } from "react";

// This is the DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER AND WRAP OUR ENTIRE APP AND GIVE ACCESS TO STATE LAYER ABOVE

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside of a component

export const useStateValue = () => useContext(StateContext);