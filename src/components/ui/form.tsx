import React, {
  ComponentPropsWithoutRef,
  FormEvent,
  ReactNode,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

type propsType = {
  onSave: (data: {}) => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<"form">;
export type formHandle = {
  reset: () => void;
};

const Form = forwardRef<formHandle, propsType>(
  ({ onSave, children, ...props }, ref) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };
    const form = useRef<HTMLFormElement>(null);
    useImperativeHandle(ref, () => {
      return {
        reset() {
          console.log("reset");
          form.current?.reset();
        },
      };
    });
    return (
      <form onSubmit={handleSubmit} {...props} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
