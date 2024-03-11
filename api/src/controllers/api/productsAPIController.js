const db = require("../../database/models");
const controller = {
  list: async (req, res) => {
    const productsList = await db.Productos.findAll({
      include: ["discount", "brand", "categories"],
      /* AQUI IRIAN LOS OFFSET Y LIMIT OPCIONALES */
    });

    const categoriesList = await db.Categorias.findAll({
      include: ["products"],
    });

    const countByCategory = {};
    categoriesList.map((category) => {
      countByCategory[category.name] = category.products.length;
    });

    const response = {
      count: productsList.length,
      countByCategory: countByCategory,
      products: productsList.map((product) => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          relations: {
            categories:
              typeof product.categories == "object"
                ? [product.categories]
                : product.categories,
            dicounts:
              typeof product.discount == "object"
                ? [product.discount]
                : product.discount,
            brands:
              typeof product.brand == "object"
                ? [product.brand]
                : product.brand,
          },
          detail: `http://localhost:5000/api/products/${product.id}`,
        };
      }),
      /* AQUI PUEDES AÑADIR LAS URLS DE PAGINADO OPCIONALES */
    };
    return res.send(response);
  },
  detail: async (req, res) => {
    const product = await db.Productos.findByPk(req.params.id, {
      include: ["categories", "brand", "discount"],
    });
    const {
      id,
      code,
      img,
      name,
      stock,
      description,
      elaborationDate,
      expirationDate,
      price,
      categories,
      discount,
      brand,
    } = product;
    const response = {
      id,
      code,
      name,
      stock,
      description,
      elaborationDate,
      expirationDate,
      price,
      categories:
        typeof product.categories == "object"
          ? [product.categories]
          : product.categories,
      dicounts:
        typeof product.discount == "object"
          ? [product.discount]
          : product.discount,
      brands:
        typeof product.brand == "object" ? [product.brand] : product.brand,
      image_url: img,
    };
    return res.send(response);
  },
};

module.exports = controller;
