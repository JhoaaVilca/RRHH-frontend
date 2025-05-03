import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarProductos() {
    const urlBackend = "http://localhost:8080/rrhh-app/productos"
    let Navegacion = useNavigate();

    const {id} = useParams();
    const [producto, setProductos] = useState({
        cantidad: '',
        categoria: '',
        descripcion: '',
        nombre: '',
        precio: '',
    })

    const { cantidad, categoria, descripcion, nombre, precio}  = producto;

    useEffect(() => {
        cargarProductos();
    },[])

    const cargarProductos = async () => {
        const resultado = await axios.get(`${urlBackend}/${id}`)
        setProductos(resultado.data)
    }

    const onInputChange = (e) => {
        setProductos({ ...producto, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        
        await axios.put(`${urlBackend}/${id}`,producto);
    
        Navegacion("/productos")
    
      }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%' }}>
                <h4 className="card-title mb-4 text-center">Registrar Producto</h4>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="cantidad" className="form-label">Cantidad</label>
                        <input type="text" className="form-control" id="cantidad" name="cantidad" value={cantidad} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="categoria" className="form-label">Categoria</label>
                        <input type="text" className="form-control" id="categoria" name="categoria" value={categoria} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" name="descripcion" value={descripcion} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="precio" className="form-label">Precio</label>
                        <input type="precio" className="form-control" id="precio" name="precio" value={precio} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Actualizar</button>
                        <a href="/productos" className="btn btn-secondary">Regresar</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
