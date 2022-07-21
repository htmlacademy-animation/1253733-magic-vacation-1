import React from "react";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaItem from "../components/PizzaItem/index";
import Sceleton from "../components/PizzaItem/Sceleton";
import { SearchContext } from "../App";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeCategories, setActiveCategories] = React.useState(0);
  const [listActive, setListActive] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://62bd53a4c5ad14c110bc0eeb.mockapi.io/items?${
        activeCategories > 0 ? `category=${activeCategories}` : ""
      }&sortBy=${listActive.sortProperty}&order=desc`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategories, listActive]);

  const pizzas = items
    .filter((obg) => {
      if (obg.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obg) => (
      <PizzaItem
        imageUrl={obg.imageUrl}
        title={obg.title}
        price={obg.price}
        image={obg.imageUrl}
        types={obg.types}
        size={obg.sizes}
      />
    ));

  const sceleton = [...new Array(6)].map((_, index) => (
    <Sceleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeCategories}
          onChangeCategories={(id) => setActiveCategories(id)}
        />
        <Sort
          value={listActive}
          onChangeSort={(property) => setListActive(property)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{loading ? sceleton : pizzas}</div>
    </>
  );
};

export default Home;
