import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarEmpleados() {
    const urlBackend = "http://localhost:8080/rrhh-app/empleados"
    let Navegacion = useNavigate();

    const {id} = useParams();
    const [empleado, setEmpleados] = useState({
        nombre: '',
        apellido: '',
        area: '',
        direccion: '',
        email: '',
        sueldo: '',
        telefono: ''
    })

    const { nombre, apellido, area, direccion, email, sueldo, telefono } = empleado;

    useEffect(() => {
        cargarEmpleado();
    },[])

    const cargarEmpleado = async () => {
        const resultado = await axios.get(`${urlBackend}/${id}`)
        setEmpleados(resultado.data)
    }

    const onInputChange = (e) => {
        setEmpleados({ ...empleado, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        
        await axios.put(`${urlBackend}/${id}`,empleado);
    
        Navegacion("/")
    
      }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
                <h4 className="card-title mb-4 text-center">Editar Empleado</h4>
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
                        <label htmlFor="area" className="form-label">Área</label>
                        <input type="text" className="form-control" id="area" name="area" value={area} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" id="direccion" name="direccion" value={direccion} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sueldo" className="form-label">Sueldo</label>
                        <input type="number" className="form-control" id="sueldo" name="sueldo" value={sueldo} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" id="telefono" name="telefono" value={telefono} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                        <a href="/" className="btn btn-secondary">Regresar</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
