export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  cpf: string;
  crm: string;
  genre: string;
  email: string;
  password: string;
}

export interface RecordData {
  name: string;
  momName: string;
  dadName: string;
  birthDate: string;
  height: number;
  weight: number;
  cpf: string;
  genre: {
    key: string;
    label: string;
  } | null;
}
