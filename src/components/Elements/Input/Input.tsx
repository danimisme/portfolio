import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
}

export default function Input({ type = "text", name, ...props }: Props) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className="w-full mt-2 text-secondary block py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:invalid:border-red-500  "
      {...props}
      required
    />
  );
}
