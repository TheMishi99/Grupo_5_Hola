//Importamos React, useEffect y useState
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
  //Utilizamos el hook useEffect para llamar a la función getProducts cuando el componente se monta por primera vez
  useEffect(() => {
    getProducts();
  }, []);

  // Función para manejar el cambio en el input de búsqueda
  const searchChange = e => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
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


  //Renderizamos la lista de productos y el input de búsqueda en el documento HTML.
  return (
    <div>
      <div className="container mt-5">
        <h2>Product List</h2>
        <form onSubmit={searchChange}>
          <div className="input-group mb-3">
            <input
              type="text"
              name='search'
              className="form-control"
              placeholder="Buscar productos..."
            />
            <div className="input-group-append">
              <button className="btn btn-danger" type="submit">
                <i className={"fas fa-1x text-white-300 fa-thin fa-paw"}></i>
              </button>
            </div>
          </div>
        </form>
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