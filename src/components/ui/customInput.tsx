import React, { ComponentPropsWithRef, forwardRef } from "react";
type inputType = {
  id: string;
  label: string;
} & ComponentPropsWithRef<"input">;
const CustomInput = forwardRef<HTMLInputElement, inputType>(
  ({ id, label, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props} ref={ref} name={id} />
      </div>
    );
  }
);

export default CustomInput;
