/* Insertando categorias */
INSERT INTO categorias (id_categoria, nombre, descripcion)
VALUES 
	(DEFAULT, 'Alimentos', 'Se encuentran desde alimentos secos, húmedos y snacks'),
    (DEFAULT, 'Accesorios', 'Se encuentran desde comederos, bebederos, collares, transportadoras, juguetes, rascadores y camas'),
    (DEFAULT, 'Estética e Higiene', 'Se encuentran desde cepillos, guantes, palitas, piedras, arena, shampoos y acondicionadores'),
    (DEFAULT, 'Salud', 'Se encuentran desde antipulgas, antigarrapatas, complementos, suplementos y antiparasitarios');
    
/* Insertando marcas */
INSERT INTO marcas (id_marca, nombre, descripcion)
VALUES 
	(DEFAULT, 'Purina Pro Plan', 'Desarrollado por científicos, veterinarios y nutricionistas, PRO PLAN® te trae el poder de la nutrición para la salud y el bienestar de tu mascota.'),
    (DEFAULT, 'Mishis', 'En Mishis, fusionamos calidad y precio para ofrecerte soluciones excepcionales que superan tus expectativas.'),
    (DEFAULT, 'Tidy Cats', 'TIDY CATS® es un mineral 100% natural de alta calidad. Cuenta con un proceso de triple secado que las hace super absorbentes y asegura un mayor control de olores. Posee un pH neutro que facilita la adaptación de tu gato.'),
    (DEFAULT, 'Bravecto', 'Con Bravecto, la indicación y el control del tratamiento contra pulgas y garrapatas vuelve a estar en manos del profesional veterinario.'); 
    
/* Insertando descuentos */
INSERT INTO descuentos (id_descuento, cantidad, descripcion)
VALUES 
	(DEFAULT, 0, 'Sin descuento'),
	(DEFAULT, 10, 'Descuento del 10%'),
    (DEFAULT, 20, 'Descuento del 20%'),
    (DEFAULT, 30, 'Descuento del 30%');

/* Insertando productos */
INSERT INTO productos (id_producto, nombre, descripcion, imagen, fecha_elaboracion, fecha_vencimiento, precio, codigo_barras, stock, id_descuento, id_marca, id_categoria)
VALUES 
	(DEFAULT, 'Alimento Pro Plan para Gato Adulto Pollo Y Arroz - 3 Kg', 'Alimento completo y balanceado para gatos adultos de todas las razas. Es una tecnología exclusiva, con una combinación de prebióticos y antioxidantes naturales, que ayudan a optimizar la digestión y a mantener fuertes las defensas naturales de tu gato, protegiendo su sistema inmunológico contra las amenazas externas.', 'https://puppis.vteximg.com.br/arquivos/ids/179653-1000-1000/7613039900277_1.png?v=637570859825470000', '2024-01-19', '2028-01-19', 24399.99, 146027, 10, 1, 1, 1),
    (DEFAULT, 'Comedero Mishis Acero Inoxidable - 1.45 L', 'El Comedero Puppis Acero Inoxidable, incluye una base antideslizante para que tu mascota se alimente mejor sin que el comedero se mueva de su lugar.', 'https://puppis.vteximg.com.br/arquivos/ids/189226-1000-1000/269341.jpg?v=637979986924130000', '2024-01-19', '2034-01-19', 8239.99, 269342, 10, 2, 2, 2),
    (DEFAULT, 'Piedras Sanitarias Tidy Cats', 'Las Piedras Sanitarias Tidy Cats son ideales para mantener la comodidad e higiene de tu gato en todo momento y por tiempo prolongado.', 'https://puppis.vteximg.com.br/arquivos/ids/193916-1000-1000/251317.jpg?v=638252803183530000', '2024-01-19', '2030-01-19', 3990, 251317, 10, 3, 3, 3),
    (DEFAULT, 'Bravecto Gato 2,8 A 6,25 Kg', 'Librarse de las pulgas de tu gato puede parecer sencillo, pero eliminarlas de tu casa puede llevar varios meses.', 'https://static.wixstatic.com/media/fd8c39_8c9117355d124484b6f08c82bbdda6c1~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fd8c39_8c9117355d124484b6f08c82bbdda6c1~mv2.jpg', '2024-01-19', '2028-01-19', 29900, 481219, 10, 4, 4, 4);
    
/* Insertando clientes */
INSERT INTO clientes (id_cliente, nombre, apellido, contraseña, email, telefono, direccion, foto_perfil, provincia)
VALUES 
	(DEFAULT, 'Juan', 'Gomez', 'securepass1', 'juan@gmail.com', 123456789, 'Chacabuco 1300', '/images/juan_profile.jpg', 'Santiago del Estero'),
    (DEFAULT, 'Maria', 'Lopez', 'mypassword', 'maria@gmail.com', 54321097, 'Mitre 1042', '/images/maria_profile.jpg', 'Santiago del Estero'),
    (DEFAULT, 'Carlos', 'Rodriguez', 'pass123', 'carlos@gmail.com', 987654321, 'Heras 99', '/images/carlos_profile.jpg', 'Santiago del Estero'),
	(DEFAULT, 'Geraldine', 'Diaz', 'password!', 'geraldine@gmail.com', 3856193862, 'Córdoba Norte 83', '/images/geraldine_profile.jpg', 'Santiago del Estero');

/* Insertando carrito de compras  */
INSERT INTO carrito_compras (id_carrito, si_envio, metodo_pago, total, id_cliente)
VALUES 
	(DEFAULT, true, 'Transferencia', 13229.99, 1), /* 1 Comedero - 1 Piedras - Envio (1000) */
    (DEFAULT, false, 'Efectivo', 54299.99, 2), /* 1 Alimento - 1 Bravecto */
    (DEFAULT, true, 'Transferencia', 74199.97, 3), /* 3 Alimento - Envio (1000) */
    (DEFAULT, false, 'Efectivo', 85169.97, 4); /* 3 Alimento - 3 Piedras */

/* Insertando producto-carrito */
INSERT INTO producto_carrito (id_producto_carrito, cantidad, id_producto, id_cliente)
VALUES 
	(DEFAULT, 1, 2, 1), /* 1 Comedero */
    (DEFAULT, 1, 3, 1), /* 1 Piedras */
    (DEFAULT, 1, 1, 2), /* 1 Alimento */
    (DEFAULT, 1, 4, 2), /* 1 Bravecto */
    (DEFAULT, 3, 1, 3), /* 3 Alimento */
    (DEFAULT, 3, 1, 4), /* 3 Alimento */
    (DEFAULT, 3, 3, 4); /* 3 Piedras */

    

