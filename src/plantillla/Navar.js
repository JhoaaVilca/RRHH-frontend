import React from 'react';

export default function Navar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light border-bottom shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold text-primary" href="/">RRHH App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        <a className="nav-link" href="/agregar">Agregar Empleado</a>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar empleado" aria-label="Buscar" />
                        <button className="btn btn-outline-primary" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
