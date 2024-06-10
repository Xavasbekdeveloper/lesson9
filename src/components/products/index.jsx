import React, { useState } from "react";
import { CATEGORIES_DATA, DATA } from "../../static";

import "./products.scss";

const Products = () => {
  const [count, setCount] = useState(1);
  const [category, setCategory] = useState("all");

  const limit = 3;
  let categories = CATEGORIES_DATA?.map((el, index) => (
    <li key={index} className="products__category__item">
      <data
        className={category === el ? "products__category__active" : ""}
        onClick={(e) => setCategory(e.target.value)}
        value={el}
      >
        {el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase()}
      </data>
    </li>
  ));

  let products = DATA?.slice(0, limit * count)?.map((product) => (
    <div key={product.id} className="products__card">
      <div className="products__card__img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="products__card__bottom">
        <div className="products__card__account"></div>
        <div className="products__card__info">
          <h3 className="products__card__title">{product.title}</h3>
          <p className="products__card__text">{product.category}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="products">
      <div className="container">
        <ul className="products__category">
          <li className="products__category__item">
            <data
              className={category === "all" ? "products__category__active" : ""}
              onClick={(e) => setCategory(e.target.value)}
              value="all"
            >
              All
            </data>
          </li>
          {categories}
        </ul>
        <div className="products__bottom">{products}</div>
        <div className="products__btn">
          <button onClick={() => setCount((p) => p + 1)}>See more</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
