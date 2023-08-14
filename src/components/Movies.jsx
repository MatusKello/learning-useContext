import MoviesContext from './MoviesContext';
import { useContext } from 'react';
import { Card, Button, Typography, Box } from '@mui/material';

const Movies = () => {
  const { deleteMovie, movies } = useContext(MoviesContext);

  return (
    <Card
      sx={{
        margin: 'auto',
        marginTop: '1rem',
        width: '50rem',
      }}
    >
      {movies.map((oneMovie) => {
        const { id, name } = oneMovie;

        return (
          <Box
            key={id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
            }}
          >
            <Typography>{name}</Typography>
            <Button variant='contained' onClick={() => deleteMovie(id)}>
              Delete
            </Button>
          </Box>
        );
      })}
    </Card>
  );
};

export default Movies;
