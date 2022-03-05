import { MovieCard } from './MovieCard';
import { IGenre, IMovie } from '../interfaces';
import '../styles/content.scss';

interface ContentProps {
  selectedGenre: IGenre;
  movies: IMovie[];
}

export function Content(props: ContentProps) {
  return (
    <div className="content">
      <header>
        <p className="category">
          Categoria: <span>{props.selectedGenre.title}</span>
        </p>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
