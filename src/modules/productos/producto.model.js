
import db from "../../config/dbconexion.js"; 
export const ProductoModel = {
    listarTodos: async () => {
        const sql = `  SELECT codigo, descripcion, unidad, costo, precio FROM productos ORDER BY descripcion`;

        const [rows] = await db.query(sql);
        return rows;
    },

    findByCodigo: async (codigo) => {
        const sql = ` SELECT codigo, descripcion, unidad, costo, precio FROM productos  WHERE codigo = ? `;
        const [rows] = await db.query(sql, [codigo]);
        return rows;
    },

    create: async (data) => {
        const sql = `
      INSERT INTO productos (codigo, descripcion, unidad, costo, precio) VALUES (?, ?, ?, ?, ?) `;
        const [rows] = await db.query(sql, [
            data.codigo,
            data.descripcion,
            data.unidad,
            data.costo,
            data.precio,
        ]);

        return rows;
    },

    update: async (codigo, data) => {
        const sql = `  UPDATE productos SET descripcion = ?, unidad = ?, costo = ?, precio = ? WHERE codigo = ? `;
        const [rows] = await db.query(sql, [
            data.descripcion,
            data.unidad,
            data.costo,
            data.precio,
            codigo,
        ]);

        return rows;
    },

    delete: async (codigo) => {
        const sql = "DELETE FROM productos WHERE codigo = ?";
        const [rows] = await db.query(sql, [codigo]);
        return rows;
    },
};