import React, { ComponentPropsWithoutRef, ReactNode } from "react";

type buttonType = {
  href?: never;
  label?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type linkType = {
  href?: string;
  label: string;
} & ComponentPropsWithoutRef<"a">;
function isAnchor(props: buttonType | linkType): props is linkType {
  return "href" in props;
}

const CustomButton = (props: buttonType | linkType) => {
  if (!isAnchor(props)) {
    return (
      <div>
        <button {...props}>{props.children}</button>
      </div>
    );
  }
  return (
    <div>
      <a {...props}>{props.label}</a>
    </div>
  );
};

export default CustomButton;
