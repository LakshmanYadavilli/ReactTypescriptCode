import React from "react";
import { dataType } from "./goals";
import css from "./goalList.module.css";
type deleteType = {
  handleDelete: (id: string) => void;
};

type propsType = dataType & deleteType;

const GoalList = ({ title, description, id, handleDelete }: propsType) => {
  return (
    <div className={css.card}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default GoalList;
