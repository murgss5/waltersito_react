/**
 * administtra la conexion con la base de datos 
 * usamos la libreria mysql2 para interactuar con MYSQL 
 * esta libreria me perimite implementarr consultas, transacciones 
 * procedimientos almacenados etc.
 * una mejor opcion es usar el ORM son libreriasa con clases idependietes 
 * del motor de bases de datos, saquelize, prisma
 * 
 */


import mysql from "mysql2/promise"; // importamos la libreria

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "app_usuario",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: "Z",
  dateStrings: true,
  decimalNumbers: true,
});

export default pool;