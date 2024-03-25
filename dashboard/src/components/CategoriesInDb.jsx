//Importamos React, useEffect y useState
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

//Definimos una función asíncrona getProducts que utiliza el método fetch para hacer una solicitud 
//a la API (/api/products) y obtener los datos sobre las categorías de productos.
function CategoriesInDb() {
  //Inicializamos un estado productsCategoryCount mediante el hook useState para almacenar un objeto.
  const [productsCategoryCount, setProductsCategoryCount] = useState({});
  const getProducts = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products`);
      const data = await response.json();
      setProductsCategoryCount(data.countByCategory);
    } catch (error) {
      console.error(error);
    }
  };

  //Utilizamos el hook useEffect para llamar a la función getProducts cuando el componente se monta por primera vez,
  useEffect(() => {
    getProducts();
  }, []);

  //Renderizamos dinámicamente las tarjetas de categorías utilizando la información almacenada en productsCategoryCount.
  return (
    <div className="col-lg-6 mb-4" style={{ marginTop: "1em" }}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Utilizamos el método map para recorrer las claves del objeto y generar una tarjeta para cada categoría */}
            {Object.keys(productsCategoryCount).map((key) => {
              return (
                <div className="col-lg-6 mb-4" key={key + 1}>
                  <div className="card bg-dark text-white shadow">
                    {console.log(key)}
                    <Link to={"/ProductsByCategory?category="+key}>
                      <div className="card-body">
                        {key} - {productsCategoryCount[key]}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
