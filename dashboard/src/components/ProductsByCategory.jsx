//Importamos React, useEffect y useState
import React, { useEffect, useState } from "react";

export const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [location] = useState(window.location);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("-- Categoria --");
  // Función para obtener productos de la API
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      const products = data.products;
      const allProducts = await Promise.all(
        products.map(async (product) => {
          const responseProduct = await fetch(
            "http://localhost:5000/api/products/" + product.id
          );
          const data = await responseProduct.json();
          return data;
        })
      );
      setProducts(allProducts);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };
  //Utilizamos el hook useEffect para llamar a la función getProducts cuando el componente se monta por primera vez
  useEffect(() => {
    getProducts();
  }, []);

  //
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryName = queryParams.get("category");
    setCategory(categoryName);

    setFilteredProducts(
      products.filter((product) => {
        return product.categories.some(
          (category) => category.name === categoryName
        );
      })
    );
  }, [products]);

  return (
    <div className="container-fluid">
      <div className="row">
        <h1>{category}</h1>
      </div>
      <div className="row">
        <ul className="d-flex flex-wrap">
          {filteredProducts.map((product, index) => {
            return (
              <li
                className="card"
                style={{ width: "17rem" }}
                key={index + product}
              >
                <div
                  className="d-flex p-2"
                  style={{ maxWidth: "300px", aspectRatio: 1 / 1.25 }}
                >
                  <img
                    src={product.image_url}
                    className="card-img-top"
                    alt={product.name}
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>{product.name}</strong>
                  </p>
                  <p className="card-text">{product.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
