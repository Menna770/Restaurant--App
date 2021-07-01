import React from "react";

const Filter = (props) => {
  return (
    <>
    <ul className="filter list-group">
      {props.types.map((type) => (
        <li
          key={type.id}
          aria-current="true"
          style={{ cursor: "pointer" }}
          className={
            "list-group-item" +
            (type.id === props.activeFilter ? " active" : " ")
          }
          onClick={() => props.onFilterChange(type)}
        >
          {type.name}
        </li>
      ))}
    </ul>
    </>
  );
};

export default Filter;
