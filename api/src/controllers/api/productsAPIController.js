const db = require("../../database/models");
const controller = {
  list: async (req, res) => {
    let productsList;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    let totalPages, nextPage, prevPage;

    if (req.query.page && req.query.pageSize) {
      const offset = (page - 1) * pageSize;
      productsList = await db.Productos.findAll({
        include: ["discount", "brand", "categories"],
        offset: offset,
        limit: pageSize,
      });

      const totalCount = await db.Productos.count();
      totalPages = Math.ceil(totalCount / pageSize);
      nextPage = page < totalPages ? `http://localhost:5000/api/products?page=${page + 1}&pageSize=${pageSize}` : null;
      prevPage = page > 1 ? `http://localhost:5000/api/products?page=${page - 1}&pageSize=${pageSize}` : null;
    } else {
      productsList = await db.Productos.findAll({
        include: ["discount", "brand", "categories"],
      });
    }

    const categoriesList = await db.Categorias.findAll({
      include: ["products"],
    });

    const countByCategory = {};
    categoriesList.forEach((category) => {
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
    };

    if (nextPage !== undefined) response.nextPage = nextPage;
    if (prevPage !== undefined) response.prevPage = prevPage;
    if (totalPages !== undefined) response.totalPages = totalPages;
    if (page !== undefined) response.currentPage = page;

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
