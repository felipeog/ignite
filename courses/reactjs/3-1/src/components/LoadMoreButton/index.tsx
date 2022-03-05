import styles from './index.module.scss';

interface ILoadMoreButtonProps {
  nextPage: string | null;
  loading: boolean;
  loadMore: () => void;
  className?: string;
}

export default function LoadMoreButton({
  nextPage,
  loading,
  loadMore,
  className,
}: ILoadMoreButtonProps): JSX.Element {
  if (nextPage) {
    return (
      <button
        className={`${styles.LoadMoreButton} ${className}`}
        type="button"
        onClick={loadMore}
        disabled={loading}
      >
        {loading ? 'Carregando...' : 'Carregar mais posts'}
      </button>
    );
  }

  return null;
}
