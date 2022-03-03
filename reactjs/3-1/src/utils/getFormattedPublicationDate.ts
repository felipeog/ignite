import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function getFormattedPublicationDate(date: string): string {
  return format(new Date(date), 'd MMM yyyy', {
    locale: ptBR,
  });
}