import { type ComponentPropsWithoutRef } from "react";

// import { type ReactNode } from "react";
type ButtonProps = {
  el: "button";
  // children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
const Button = (props: ButtonProps | AnchorProps) => {
  if (props.el === "anchor") {
    return <a href="" {...props}></a>;
  }
  return (
    <div>
      <button {...props}>{props.children}</button>
    </div>
  );
};

export default Button;
