import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; 

export default function ListadoClientes() {
    const urlBackend = "http://localhost:8080/rrhh-app/cliente";
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        cargarClientes();
    }, []);

    const cargarClientes = async () => {
        const resultado = await axios.get(urlBackend);
        setClientes(resultado.data);
    };

    const eliminarClientes = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este cliente?")) {
            await axios.delete(`${urlBackend}/${id}`);
            cargarClientes();
        }
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Sistema de Recursos Humanos</h2>
                <p className="text-muted">Listado de Clientes</p>
            </div>

            {/* Tabla con diseño moderno */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover shadow-lg rounded-3">
                    <thead className="table-primary">
                        <tr>
                            <th>Id</th>
                            <th>Apellidos</th>
                            <th>Nombres</th>
                            <th>Dirección</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientes.map((cliente, indice) => (
                                <tr key={indice} className="border-bottom">
                                    <td>{cliente.idCliente}</td>
                                    <td>{cliente.apellido}</td>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.telefono}</td>
                                    <td className="text-center">
                                        <div className="d-flex justify-content-center">

                                            <Link
                                                to={`/editarclientes/${cliente.idCliente}`}
                                                className="btn btn-outline-primary btn-sm me-2 shadow-sm rounded-pill px-3 py-1"
                                                title="Editar"
                                            >
                                                <FaEdit className="me-2" />
                                                Editar
                                            </Link>
                                            <button
                                                onClick={() => eliminarClientes(cliente.idCliente)}
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
