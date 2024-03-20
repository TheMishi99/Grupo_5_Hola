import React, { useEffect,useState } from "react";
import SmallCard from "./SmallCard";


function ContentRowProducts() {
  const [usersCount,setUsersCount] = useState(0);
  const [productsCount,setProductsCount] = useState(0);
  const [productsCategoryCount, setProductsCategoryCount] = useState({});

/*  Cada set de datos es un objeto literal */

/* <!-- Total Users --> */

let totalUsers = {
  title: "Total Users",
  color: "primary",
  cuantity: usersCount,
  icon:"fa-thin fa-users",
};

/* <!-- Total Productos --> */

let totalProducts = {
  title: "Total Products",
  color: "success",
  cuantity: productsCount,
  icon:"fa-thin fa-truck-ramp-box",
};

/* <!-- Categories quantity --> */
let categoriesQuantity = {
  title: "Categories quantity",
  color: "warning",
  cuantity: Object.keys(productsCategoryCount).length,
  icon: "fa-clipboard-list",
};

let cartProps = [totalUsers, totalProducts,categoriesQuantity];

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

  const getUsers = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users`
      );
      const data = await response.json();
      setUsersCount(data.count)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
    getUsers()
  },[])


  return (
    <div className="row" style={{ marginTop: '1em' }}>
      {cartProps.map((data, i) => {
        return <SmallCard {...data} key={i} />;
      })}
    </div>
  );
}

export default ContentRowProducts;
