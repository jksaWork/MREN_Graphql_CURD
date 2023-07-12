import { inputProps, t, SelectProps } from "../common.types";

import Select from "react-select";
export const MySelect = ({
  name,
  value,
  options,
  handelChange,
}: SelectProps) => (
  <div className="mb-3 pt-0">
    <label className="text-xl mb-3 capitalize">
      {name == "clientId" ? "cleint" : name}
    </label>
    <Select
      // value={options.filter((option) => option.label === value)}
      placeholder={value}
      onChange={(e) => {
        console.log(e);
        handelChange((name == "clientId" ? "clientId" : name) as t, e?.value);
      }}
      options={options}
    />
  </div>
);

export const Input = ({ name, value, handelChange }: inputProps) => {
  return (
    <div className="mb-3 pt-0">
      <label className="text-xl mb-3 capitalize">{name}</label>
      <input
        type="text"
        value={value}
        placeholder="Placeholder"
        onChange={(e) => handelChange(name as t, e.target.value)}
        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
    </div>
  );
};
