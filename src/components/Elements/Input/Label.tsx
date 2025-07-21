interface Props {
  name: string;
  label: string;
}
export default function Label({ name, label }: Props) {
  return (
    <label
      htmlFor={name}
      className="text-base font-semibold text-secondary absolute dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
    >
      {label}
    </label>
  );
}
