export interface IGenre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IMovie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: IRating[];
  Runtime: string;
}
