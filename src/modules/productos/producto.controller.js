import { ProductoModel } from "./producto.model.js";

export const obtenerProductos = async (req, res) => {
  try {
    const results = await ProductoModel.listarTodos();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al listar los productos: ${error}`,
    });
  }
};

export const obtenerProductoCodigo = async (req, res) => {
  try {
    const results = await ProductoModel.findByCodigo(req.params.codigo);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al consultar el producto: ${error}`,
    });
  }
};

export const crearProducto = async (req, res) => {
  const datos = {
    codigo: req.body.codigo,
    descripcion: req.body.descripcion,
    unidad: req.body.unidad,
    costo: req.body.costo,
    precio: req.body.precio,
  };

  try {
    const results = await ProductoModel.create(datos);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al crear el producto: ${error}`,
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    const results = await ProductoModel.delete(req.params.codigo);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar el producto: ${error}`,
    });
  }
};

export const actualizarProducto = async (req, res) => {
  const datos = {
    descripcion: req.body.descripcion,
    unidad: req.body.unidad,
    costo: req.body.costo,
    precio: req.body.precio,
  };

  try {
    const results = await ProductoModel.update(req.params.codigo, datos);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al actualizar el producto: ${error}`,
    });
  }
};