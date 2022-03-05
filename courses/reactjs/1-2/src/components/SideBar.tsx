import { Button } from './Button';
import { IGenre } from '../interfaces';
import '../styles/sidebar.scss';

interface SideBarProps {
  genres: IGenre[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <p>
        Watch<span>Me</span>
      </p>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
