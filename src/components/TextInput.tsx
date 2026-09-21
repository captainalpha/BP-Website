import { Field, Input, Label } from "@headlessui/react";
import React from "react";

interface IProps {
  label?: string;
  value: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (val: string) => void;
}

const TextInput = ({
  label,
  value,
  type,
  placeholder,
  required,
  onChange,
}: IProps) => {
  return (
    <Field className="flex flex-col">
      {label && <Label className="text-black">{label}</Label>}
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className="px-2 py-1 border rounded-sm outline-none text-black"
        required={required}
      />
    </Field>
  );
};

export default TextInput;
