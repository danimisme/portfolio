import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export default function TextArea({ name, ...props } : Props) {
  return (
    <textarea
      id={name}
      name={name}
      className="w-full mt-2 text-secondary p-3 border-b-[3px] border-secondary outline-none focus:border-primary focus:shadow-md focus:invalid:border-red-500 h-32 block py-2.5 px-0 text-s bg-transparent border-0  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
      {...props}
      required
    ></textarea>
  );
}
