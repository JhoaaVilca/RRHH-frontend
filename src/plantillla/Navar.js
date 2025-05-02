import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(to right, #6a11cb, #2575fc)' }}>
            <div className="container">
                <a className="navbar-brand fw-bold text-white" href="/">RRHH APP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link text-white" aria-current="page" href="/">Empleados</a>
                        <a className="nav-link text-white" href="/agregar">Agregar Empleado</a>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link text-white" aria-current="page" href="/clientes">Clientes</a>
                        <a className="nav-link text-white" href="/agregarclientes">Agregar Clientes</a>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                        <button className="btn btn-outline-light" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
