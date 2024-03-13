import React, { useEffect,useState } from "react";
import SmallCard from "./SmallCard";


function ContentRowMovies() {
  const [productsCount,setProductsCount] = useState(0);
  const [productsCategoryCount, setProductsCategoryCount] = useState({});

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
  title: "Movies in Data Base",
  color: "primary",
  cuantity: 21,
  icon: "fa-clipboard-list",
};

/* <!-- Total Productos --> */

let totalProducts = {
  title: "Total Products",
  color: "success",
  cuantity: productsCount,
  icon: "fa-award",
};

/* <!-- Categories quantity --> */
let categoriesQuantity = {
  title: "Categories quantity",
  color: "warning",
  cuantity: Object.keys(productsCategoryCount).length,
  icon: "fa-user-check",
};

let cartProps = [moviesInDB, totalProducts,categoriesQuantity];

  const getProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products`
      );
      const data = await response.json();
      // console.log(data);
      setProductsCount(data.count)
      // console.log(data.countByCategory)
      setProductsCategoryCount(data.countByCategory)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  },[])

  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
