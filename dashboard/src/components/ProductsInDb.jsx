import React, { useState, useEffect } from 'react';

function Products() {
  //Estado para almacenar los productos, busqueda y paginado
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(7);

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
    setCurrentPage(1); 
  };

  // Filtrar los productos basados en el término de búsqueda
  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.relations.categories[0].name.toLowerCase().includes(searchTerm.toLowerCase())||
    product.relations.dicounts[0].description.toLowerCase().includes(searchTerm.toLowerCase())||
    product.relations.brands[0].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

   //Lógica para el paginado
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = filteredProducts.slice(firstProductIndex, lastProductIndex);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const nextPage = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const prevPage = () => {
      setCurrentPage(currentPage - 1);
    };

  //Renderizar los productos
  return (
    <div>
      <div className="container mt-5">
        <h2>Product List</h2>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={searchChange}
        />
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
            {currentProducts.map((product) => (
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
        <div className="pagination" style={{ marginBottom: '2em' }}>
          {currentPage > 1 && (
            <button onClick={prevPage}> Anterior </button>
          )}
          {currentPage < totalPages && (
            <button onClick={nextPage}> Siguiente </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;