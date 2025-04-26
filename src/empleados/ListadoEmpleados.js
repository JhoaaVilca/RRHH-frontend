
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ListadoEmpleados() {
    const urlBackend = "http://localhost:8080/rrhh-app/empleados";

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBackend);
        setEmpleados(resultado.data);
    }
    return (
        <div className='container'>
            <div className='conteiner text-center' style={{ margin: "30px" }}>
                <h3>Sistema de Recursos Humanos 1524952</h3>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Nombres</th>
                        <th scope="col">Area</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Email</th>
                        <th scope="col">Sueldo</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {
                        empleados.map((empleados, indice) => (
                            <tr key={indice}>
                                <th scope="row">{empleados.idEmpleados}</th>
                                <td>{empleados.apellido}</td>
                                <td>{empleados.nombre}</td>
                                <td>{empleados.area}</td>
                                <td>{empleados.direccion}</td>
                                <td>{empleados.email}</td>
                                <td>{empleados.sueldo}</td>
                                <td>{empleados.telefono}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
