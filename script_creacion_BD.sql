CREATE SCHEMA `mishis_db` ;

CREATE TABLE categorias (
	id_categoria INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(255) NOT NULL,
	descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE marcas (
	id_marca INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(255) NOT NULL,
	descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE descuentos (
	id_descuento INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	cantidad INT NOT NULL,
	descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE productos (
    id_producto INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    fecha_elaboracion DATE NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    precio FLOAT NOT NULL,
    codigo_barras INT UNIQUE NOT NULL, 
    stock INT NOT NULL,
    id_descuento INT UNSIGNED,
    id_marca INT UNSIGNED,
    id_categoria INT UNSIGNED,
    FOREIGN KEY (id_descuento) REFERENCES descuentos(id_descuento),
    FOREIGN KEY (id_marca) REFERENCES marcas(id_marca),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

CREATE TABLE clientes (
    id_cliente INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
	contraseña VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefono INT NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    foto_perfil VARCHAR(255) NOT NULL,
    provincia VARCHAR(255) NOT NULL
);

CREATE TABLE carrito_compras (
    id_carrito INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    si_envio BOOLEAN NOT NULL,
    metodo_pago VARCHAR(255) NOT NULL,
    total FLOAT NOT NULL,
	id_cliente INT UNSIGNED,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE producto_carrito (
    id_producto_carrito INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cantidad INT NOT NULL, 
    id_producto INT UNSIGNED,
	id_cliente INT UNSIGNED,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

SELECT * FROM CLIENTES




