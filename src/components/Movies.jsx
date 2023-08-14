import MoviesContext from './MoviesContext';
import { useContext } from 'react';
import { Card, Button, Typography, Box } from '@mui/material';

const Movies = () => {
  const { deleteMovie, movies } = useContext(MoviesContext);

  return (
    <Card>
      {movies.map((oneMovie) => {
        const { id, name } = oneMovie;

        return (
          <Box key={id}>
            <Typography>{name}</Typography>
            <Button onClick={() => deleteMovie(id)}>Delete</Button>
          </Box>
        );
      })}
    </Card>
  );
};

export default Movies;
