const { body } = require("express-validator");
const path  = require("path");

const editValidate = [
    body('name')
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isLength({ min: 5 }).withMessage("Debes completar con un nombre y apellido válido"),
    body('phonenumber')
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isNumeric().withMessage("Debe ser un número de télefono válido"),
    body('profilePicture')
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
        }).bail()
]

module.exports = editValidate;