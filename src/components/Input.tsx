import { type ComponentPropsWithoutRef, type FC } from "react";
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input: FC<InputProps> = ({ id, label, ...props }) => {
  return (
    <p className="flex flex-col justify-around w-11/12 py-2 text-white">
      <label htmlFor={id} className="uppercase text-xl pb-2">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="h-10 rounded-md bg-slate-200 text-slate-900 pl-4 text-lg"
        {...props}
      />
    </p>
  );
};

export default Input;
