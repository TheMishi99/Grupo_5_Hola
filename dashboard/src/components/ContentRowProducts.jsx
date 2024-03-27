//Importamos React, useEffect y useState
import React, { useEffect,useState } from "react";
//Importamos el componente SmallCard desde el archivo SmallCard.js
import SmallCard from "./SmallCard";

//Definimos tres estados mediante el hook useState para almacenar  el número total de usuarios, productos y categorías de productos disponibles.
function ContentRowProducts() {
  const [usersCount,setUsersCount] = useState(0);
  const [productsCount,setProductsCount] = useState(0);
  const [productsCategoryCount, setProductsCategoryCount] = useState({});

/*  Cada set de datos es un objeto literal */

/* <!-- Total Users --> */
//Creamos objetos literales y los agrupamos en un arreglo llamado cartProps.
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

//Implementamos funciones asincronicas getProducts y getUsers para obtener datos de la API
//Utilizamos el método fetch para hacer solicitudes a los endpoints (/api/products y /api/users).
  const getProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products`
      );
      const data = await response.json();
      setProductsCount(data.count)
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
//Utilizamos el hook useEffect para llamar a estas funciones cuando el componente se monta por primera vez
  useEffect(() => {
    getProducts();
    getUsers()
  },[])

//Renderizamos dinámicamente las tarjetas del dashboard utilizando la información proporcionada por cartProps.
  return (
    <div className="row" style={{ marginTop: '1em' }}>
      {cartProps.map((data, i) => {
        return <SmallCard {...data} key={i} />;
      })}
    </div>
  );
}

export default ContentRowProducts;
