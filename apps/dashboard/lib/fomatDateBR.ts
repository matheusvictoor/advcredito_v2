import { format, toZonedTime } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';

export function formatDateBR(date: string | Date, pattern = 'dd/MM/yyyy') {
  const timezone = 'America/Sao_Paulo';
  const zoned = toZonedTime(date, timezone);
  return format(zoned, pattern, { locale: ptBR });
}
