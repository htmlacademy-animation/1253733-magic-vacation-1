import React from "react";

function Categories({ value, onChangeCategories }) {
  const filter = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {filter.map((item, i) => (
          <li
            key={i}
            onClick={() => onChangeCategories(i)}
            className={value === i ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
