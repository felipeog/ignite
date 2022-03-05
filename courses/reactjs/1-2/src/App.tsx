import { useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { api } from './services/api';
import { IGenre, IMovie } from './interfaces';
import './styles/app.scss';

export function App() {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<IGenre>({} as IGenre);

  useEffect(() => {
    api.get<IGenre[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<IMovie[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api.get<IGenre>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div className="app">
      <SideBar
        genres={genres}
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />

      <Content selectedGenre={selectedGenre} movies={movies} />
    </div>
  );
}
