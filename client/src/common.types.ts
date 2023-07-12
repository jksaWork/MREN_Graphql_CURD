import { OptionsOrGroups } from "react-select";
import { ClientInterface } from "./components/Clients";

export type inputProps = {
  name: string;
  handelChange: (a: t, b: any) => void;
  value: string | number;
};

export type noramalOption = {
  value: string;
  label: string;
};
export type SelectProps = {
  name: string;
  handelChange: (a: t, b: any) => void;
  value: string | number;
  options: noramalOption[];
};

export type ProjectFormType = {
  id?: string;
  name: string;
  description: string;
  status: string;
  clientId: string;
};

export type t = keyof ProjectFormType;
