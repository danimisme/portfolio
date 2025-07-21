import { HTMLAttributes } from "react";
import Input from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";

interface Props extends HTMLAttributes<HTMLElement> {
  type?: string;
  name: string;
  label: string;
  placeholder?: string;
}

export default function InputForm({ type, name, label, ...props } : Props) {
  return (
    <div className="w-full relative z-0 mb-8">
      {type?.toLowerCase() === "textarea" ? (
        <TextArea name={name} {...props} />
      ) : (
        <Input type={type} name={name} {...props} />
      )}
      <Label name={name} label={label} />
    </div>
  );
}
