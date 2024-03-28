import React from "react";
import css from "./info.module.css";
type warningType = {
  mode: "warning";
  severity: "high" | "medium" | "low";
};

type alertType = {
  mode: "alert";
};

const Info = (props: warningType | alertType) => {
  const { mode } = props;
  if (mode === "alert") {
    return (
      <div className={css.alert}>
        <p>No Goal added yet</p>
      </div>
    );
  }
  const { severity } = props;
  const bg = `warning-${severity}`;
  return (
    <div className={`${css[bg]} ${css.warning}`}>
      <p>Too many Goals Added, Add before check.</p>
    </div>
  );
};

export default Info;
