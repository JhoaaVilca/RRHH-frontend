import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';  // Para los iconos

export default function ListadoProductos() {
    const urlBackend = "http://localhost:8080/rrhh-app/productos";
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        const resultado = await axios.get(urlBackend);
        setProductos(resultado.data);
    };

    const eliminarProducto = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            await axios.delete(`${urlBackend}/${id}`);
            cargarProductos();
        }
    };

    return (
        <div className="container mt-5">
            {/* Título */}
            <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Sistema de Recursos Humanos</h2>
                <p className="text-muted">Listado de Productos</p>
            </div>

            {/* Tabla con diseño moderno */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover shadow-lg rounded-3">
                    <thead className="table-primary">
                        <tr>
                            <th>Id</th>
                            <th>Cantidad</th>
                            <th>Categoria</th>
                            <th>Descripcion</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((producto, indice) => (
                                <tr key={indice} className="border-bottom">
                                    <td>{producto.idProductos}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.categoria}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td className="text-center">
                                        {/* Botones de Acciones */}
                                        <div className="d-flex justify-content-center">
                                            {/* Botón de Editar */}
                                            <Link
                                                to={`/editarproductos/${producto.idProductos}`}
                                                className="btn btn-outline-primary btn-sm me-2 shadow-sm rounded-pill px-3 py-1"
                                                title="Editar"
                                            >
                                                <FaEdit className="me-2" />
                                                Editar
                                            </Link>

                                            {/* Botón de Eliminar */}
                                            <button
                                                onClick={() => eliminarProducto(producto.idProductos)}
                                                className="btn btn-outline-danger btn-sm shadow-sm rounded-pill px-3 py-1"
                                                title="Eliminar"
                                            >
                                                <FaTrashAlt className="me-2" />
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
