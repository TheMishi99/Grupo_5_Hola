const { body } = require("express-validator");
const path  = require("path");

const createPValidate = [
    body('img')
        .custom((value, { req }) => {
            const file = req.file;
            const acceptedExtensions = ['.jpg','.png','.jpeg','.gif'];
            if (!file) {
                throw new Error("Este campo es obligatorio")
            }else{
                const fileExtension = path.extname(file.originalname);
                if(!acceptedExtensions.includes(fileExtension)){
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
                }
            }
            return true;
        }).bail(),
        body('name')
        .notEmpty().withMessage("Este campo es obligatorio").bail()
        .isLength({ min: 5 }).withMessage("El nombre del producto debe tener al menos 5 caracteres"),
        body('code')
        .notEmpty().withMessage("Este campo es obligatorio").bail()
        .isLength({ min: 4 }).withMessage("El código del producto debe tener al menos 4 caracteres"),
        body('stock')
        .notEmpty().withMessage("Este campo es obligatorio").bail(),
        body('description')
        .notEmpty().withMessage("Este campo es obligatorio").bail()
        .isLength({ min: 20 }).withMessage("La descripcion del producto debe tener al menos 20 caracteres"),
        body('elaborationDate')
        .notEmpty().withMessage("Este campo es obligatorio").bail(),
        body('expirationDate')
        .notEmpty().withMessage("Este campo es obligatorio").bail(),
        body('price')
        .notEmpty().withMessage("Este campo es obligatorio").bail(),
]

module.exports = createPValidate;