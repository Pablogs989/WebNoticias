import React, { createContext } from 'react';


const initialState = {
  news: []
}


export const GlobalContext = createContext(initialState);