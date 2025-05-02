import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AgregarClientes() {

    let Navegacion = useNavigate();

    const [Cliente, setClientes] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        email: '',
        telefono: ''
    })

    const { nombre, apellido, direccion, email, telefono } = Cliente;

    const onInputChange = (e) => {
        setClientes({ ...Cliente, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        const urlBase = "http://localhost:8080/rrhh-app/cliente"
        await axios.post(urlBase,Cliente);
    
        Navegacion("/clientes")
    
      }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
                <h4 className="card-title mb-4 text-center">Agregar Clientes</h4>
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
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        <a href="/clientes" className="btn btn-secondary">Regresar</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
