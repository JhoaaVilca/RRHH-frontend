import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarClientes() {
    const urlBackend = "http://localhost:8080/rrhh-app/cliente"
    let Navegacion = useNavigate();

    const {id} = useParams();
    const [cliente, setClientes] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        email: '',
        telefono: ''
    })

    const { nombre, apellido, direccion, email, telefono } = cliente;

    useEffect(() => {
        cargarClientes();
    },[])

    const cargarClientes = async () => {
        const resultado = await axios.get(`${urlBackend}/${id}`)
        setClientes(resultado.data)
    }

    const onInputChange = (e) => {
        setClientes({ ...cliente, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        
        await axios.put(`${urlBackend}/${id}`,cliente);
    
        Navegacion("/clientes")
    
      }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
                <h4 className="card-title mb-4 text-center">Editar Cliente</h4>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombres</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">Apellidos</label>
                        <input type="text" className="form-control" id="apellido" name="apellido" value={apellido} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="direccion" name="direccion" value={direccion} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" id="telefono" name="telefono" value={telefono} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                        <a href="/clientes" className="btn btn-secondary">Regresar</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
