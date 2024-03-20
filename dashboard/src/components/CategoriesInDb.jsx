import React, { useEffect, useState } from "react";

function CategoriesInDb() {
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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="col-lg-6 mb-4" style={{ marginTop: '1em' }}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {Object.keys(productsCategoryCount).map((key) => {
              return (
                <div className="col-lg-6 mb-4" key={key + 1}>
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                      {key} {productsCategoryCount[key]}
                    </div>
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
