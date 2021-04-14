import { useParams, Redirect } from 'react-router-dom';

function MovieDetails(props) {
  const { id } = useParams();

  const movieChoice = props.movies.find(
    (singleMovie) => singleMovie.id === Number(id)
  );

  if (!movieChoice) {
    return <Redirect to='/' />;
  }

  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
