const { body } = require("express-validator");
const path  = require("path");

const modifyPValidate = [
    body('img')
        .custom((value, { req }) => {
            const file = req.file;
            const acceptedExtensions = ['.jpg','.png','.jpeg','.gif'];
            if (file) {
                const fileExtension = path.extname(file.originalname);
                if(!acceptedExtensions.includes(fileExtension)){
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
                }
            }
            return true;
        }).bail(),
        body('name')
        .notEmpty().withMessage("Este campo no puede estar vacío").bail()
        .isLength({ min: 5 }).withMessage("El nombre del producto debe tener al menos 5 caracteres"),
        body('code')
        .notEmpty().withMessage("Este campo no puede estar vacío").bail()
        .isLength({ min: 4 }).withMessage("El código del producto debe tener al menos 4 caracteres"),
        body('stock')
        .notEmpty().withMessage("Este campo no puede estar vacío").bail(),
        body('description')
        .notEmpty().withMessage("Este campo no puede estar vacío").bail()
        .isLength({ min: 20 }).withMessage("La descripcion del producto debe tener al menos 20 caracteres"),
        body('elaborationDate')
        .notEmpty().withMessage("Este campo no puede estar vacío").bail(),
        body('expirationDate')
        .notEmpty().withMessage("Este campo no puede estar vacío").bail(),
        body('price')
        .notEmpty().withMessage("Este campo no puede estar vacío").bail(),
]

module.exports = modifyPValidate;