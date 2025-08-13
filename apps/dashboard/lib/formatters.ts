import { APP_NAME } from "@workspace/common/app";
import { PropertyType } from "@workspace/database";
import { Decimal } from "decimal.js"

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

export type BrazilianState = {
  code: string;
  name: string;
} 

export const brazilianStates: BrazilianState[] = [
  { code: "AC", name: "Acre" },
  { code: "AL", name: "Alagoas" },
  { code: "AP", name: "Amapá" },
  { code: "AM", name: "Amazonas" },
  { code: "BA", name: "Bahia" },
  { code: "CE", name: "Ceará" },
  { code: "DF", name: "Distrito Federal" },
  { code: "ES", name: "Espírito Santo" },
  { code: "GO", name: "Goiás" },
  { code: "MA", name: "Maranhão" },
  { code: "MT", name: "Mato Grosso" },
  { code: "MS", name: "Mato Grosso do Sul" },
  { code: "MG", name: "Minas Gerais" },
  { code: "PA", name: "Pará" },
  { code: "PB", name: "Paraíba" },
  { code: "PR", name: "Paraná" },
  { code: "PE", name: "Pernambuco" },
  { code: "PI", name: "Piauí" },
  { code: "RJ", name: "Rio de Janeiro" },
  { code: "RN", name: "Rio Grande do Norte" },
  { code: "RS", name: "Rio Grande do Sul" },
  { code: "RO", name: "Rondônia" },
  { code: "RR", name: "Roraima" },
  { code: "SC", name: "Santa Catarina" },
  { code: "SP", name: "São Paulo" },
  { code: "SE", name: "Sergipe" },
  { code: "TO", name: "Tocantins" },
];

export const getTypeProperty = (type: PropertyType) => {
    const types = {
      APARTMENT: "Apartamento",
      ATTIC: "Sótão",
      BUILDING: "Prédio",
      CHALET: "Chalé",
      COMMERCIAL_SPACE: "Sala Comercial",
      CONDOMINIUM: "Condomínio",
      COUNTRY_HOUSE: "Casa de Campo",
      FARM: "Fazenda",
      GARAGE: "Garagem",
      HOLIDAY_HOME: "Casa de Férias",
      HOUSE: "Casa",
      HOTEL: "Hotel",
      KITNETTE: "Kitnet",
      LAND: "Terreno",
      LIVING_ROOM: "Sala de Estar",
      LOFT: "Loft",
      LOT: "Lote",
      MOTORHOME: "Motohome",
      OFFICE: "Escritório",
      OTHER: "Outro",
      PARKING: "Estacionamento",
      ROOM: "Sala",
      SHARED_OFFICE: "Escritório Compartilhado",
      STORE: "Loja",
      STUDIO: "Estúdio",
      VILLA: "Vila",
      WAREHOUSE: "Armazém",
      WAREHOUSE_BUILDING: "Depósito",
    };
    return types[type];
  };

export const formatValue = (key: string, value: string | null | undefined): string => {
  if (!value) return "";

  switch (key) {
    case "cpf":
      return mask.cpf(value);
    case "cnpj":
      return mask.cnpj(value);
    case "phone":
      return mask.phone(value);
    case "zipcode":
      return mask.zipcode(value);
    case "state":
      return brazilianStates.find((state) => state.code === value)?.name || value;
    default:
      return value;
  }
};

export const formatCurrency = (value: number | Decimal): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(typeof value === 'number' ? value : parseFloat(value.toString()));
};

export const isNegativeValue = (value: string | number): boolean => {
    if (typeof value === 'number') {
      return value < 0;
    } else {
      return new Decimal(value).isNegative();
    }
  };

export const pluralize = (word: string, count: number): string => {
  return count === 1 ? word : `${word}s`;
};
