import data from './data';
import MovieBox from './components/MovieBox';
import MoviesContext from './components/MoviesContext';
import { useState } from 'react';
import { Box } from '@mui/material';

const App = () => {
  const [movies, setMovies] = useState(data);

  const deleteMovie = (movieId) => {
    const newMovieList = movies.filter((oneMovie) => {
      return oneMovie.id !== movieId;
    });
    setMovies(newMovieList);
  };

  return (
    <Box>
      <MoviesContext.Provider value={{ deleteMovie, movies }}>
        <MovieBox />
      </MoviesContext.Provider>
    </Box>
  );
};

export default App;
