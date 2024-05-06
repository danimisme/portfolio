import Input from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";

export default function InputForm({ type, name, label, ...props }) {
  return (
    <div className="w-full relative z-0 mb-8">
      {type === "textarea" ? (
        <TextArea name={name} {...props} />
      ) : (
        <Input type={type} name={name} {...props} />
      )}
      <Label name={name} label={label} />
    </div>
  );
}
