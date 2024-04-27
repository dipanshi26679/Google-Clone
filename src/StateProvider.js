import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";


export const stateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);

export const StateValue = () => useContext(stateContext);