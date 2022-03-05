import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function getFormattedChangeDate(date: string): string {
  return format(new Date(date), "d MMM yyyy', às' kk:mm", {
    locale: ptBR,
  });
}
