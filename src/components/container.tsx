import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
type propsType<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;
function Container<C extends ElementType>({
  as,
  children,
  ...props
}: propsType<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}

export default Container;
