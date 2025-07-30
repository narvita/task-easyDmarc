export const enum UserRegistartionStepEnum {
  Step1 = 1,
  Step2 = 2,
  Step3 = 3,
}
export enum Industy {
  MARKETING = 'Marketing',
  IT = 'it',
  FINANCIAL_SERVICES = 'Financial-servicces',
}

export enum Role {
  DEVELOPER = 'Developer',
  MANAGER = 'Manager',
  Designer = 'DEsigner',
}

export interface Istep1FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IStep2FormData {
  industy: Industy;
  experianceYears: number;
  yourRole: Role;
}

export interface Istep3FormData {
  aboutUs: string;
}
