import { Field, Label, Select } from "@headlessui/react";
import React from "react";

interface IProps {
  label?: string;
  value: string;
  options: string[];
  placeholder?: string;
  required?: boolean;
  onChange: (val: string) => void;
}

const SelectInput = ({
  label,
  value,
  options,
  placeholder,
  required,
  onChange,
}: IProps) => {
  return (
    <Field className="flex flex-col">
      {label && <Label>{label}</Label>}
      <Select
        value={value ?? placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="px-2 py-1 border rounded-sm outline-none"
        required={required}
      >
        {options?.map((opt, ind) => (
          <option
            value={opt}
            key={ind + opt}
            className="bg-gray-100 text-slate-900"
          >
            {opt}
          </option>
        ))}
      </Select>
    </Field>
  );
};

export default SelectInput;
