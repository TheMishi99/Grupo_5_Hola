import React, { useState, useEffect } from 'react';

function Products() {
  //Estado para almacenar los productos y la busqueda
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Función para obtener productos de la API
  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      const products = data.products;
      setProducts(products ? products : []);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Función para manejar el cambio en el input de búsqueda
  const searchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtrar los productos basados en el término de búsqueda
  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.relations.categories[0].name.toLowerCase().includes(searchTerm.toLowerCase())||
    product.relations.dicounts[0].description.toLowerCase().includes(searchTerm.toLowerCase())||
    product.relations.brands[0].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Renderizar los productos
  return (
    <div>
      <div className="container mt-5">
        <h2>Product List</h2>
        {/* Input de Búsqueda */}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={searchChange}
        />
        {/* Listado de Productos */}
        <table className="table table-striped table-bordered table-responsive">
          <thead className='table-dark'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Discount</th>
              <th>Brand</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody className='table-bordered'>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.relations.categories[0].name}</td>
                <td>{product.relations.dicounts[0].description}</td>
                <td>{product.relations.brands[0].name}</td>
                <td><a href={product.detail} target="_blank">View Detail</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginBottom: '2em' }}></div>
      </div>
    </div>
  );
}

export default Products;