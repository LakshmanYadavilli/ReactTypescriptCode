import React, { FormEvent, useRef, useState } from "react";
import { v4 } from "uuid";
import GoalList from "./goalList";

import css from "./goals.module.css";
import Info from "./info";
type propsType = {
  add: (title: string, description: string) => void;
  data: dataType[];
};
export type dataType = {
  id: string;
  title: string;
  description: string;
};
const Goals = () => {
  const [data, setdata] = useState<dataType[]>([]);
  const handleAdd = (title: string, description: string) => {
    setdata((prev) => [...prev, { title, description, id: v4() }]);
  };

  const handleDelete = (id: string) => {
    setdata((prev) => prev.filter((item) => item.id !== id));
  };

  const titleEle = useRef<HTMLInputElement>(null);
  const descriptionEle = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = titleEle.current!.value;
    const description = descriptionEle.current!.value;
    handleAdd(title, description);

    event.currentTarget.reset();
  };
  return (
    <div>
      {data.length === 0 && <Info mode="alert" />}
      <div className={css.formBoundaries}>
        <form className={css.formContainer} onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" ref={titleEle} />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" ref={descriptionEle} />

          <button type="submit" className={css.formButton}>
            submit
          </button>
        </form>
      </div>
      <div className={css.warning}>
        {data.length >= 4 && <Info mode="warning" severity="high" />}
      </div>
      <div className={css.goalsContainer}>
        {data.map((item) => (
          <GoalList
            key={item.id}
            title={item.title}
            description={item.description}
            id={item.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Goals;
