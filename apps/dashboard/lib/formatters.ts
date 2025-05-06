import { APP_NAME } from "@workspace/common/app";

export function createTitle(title: string, addSuffix: boolean = true): string {
  if (!addSuffix) {
    return title;
  }
  if (!title) {
    return APP_NAME;
  }

  return `${title} | ${APP_NAME}`;
}

export function capitalize(str: string): string {
  if (!str) {
    return str;
  }

  if (str.length === 1) {
    return str.charAt(0).toUpperCase();
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getInitials(name: string): string {
  if (!name) {
    return "";
  }
  return name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");
}

export function getTimeSlot(hours: number, minutes: number): Date {
  const date = new Date(0);

  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);

  date.setHours(hours);
  date.setMinutes(minutes);

  return date;
}

export const mask = {
  cpf: (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  },

  cnpj: (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 14);
    return numbers.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      "$1.$2.$3/$4-$5",
    );
  },

  phone: (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/g, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");
  },

  zipcode: (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 8);
    return numbers.replace(/(\d{5})(\d{3})/g, "$1-$2");
  },
};

export const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const pluralize = (word: string, count: number): string => {
  return count === 1 ? word : `${word}s`;
};
