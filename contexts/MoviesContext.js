// contexts/MoviesContext.js
import { createContext, useContext, useReducer } from 'react';

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(moviesReducer, []);

  return (
    <MoviesContext.Provider value={{ movies, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = () => {
  return useContext(MoviesContext);
};

const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};
