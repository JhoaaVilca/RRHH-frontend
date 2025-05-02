import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navar from "./plantillla/Navar";
import AgregarEmpleados from "./empleados/AgregarEmpleados";
import EditarEmpleados from "./empleados/EditarEmpleados";
import ListadoClientes from "./clientes/ListadoClientes";
import AgregarClientes from "./clientes/AgregarClientes";
import EditarClientes from "./clientes/EditarClientes";


function App() {
  return (
    <div className="container">
     <BrowserRouter>
     <Navar/>
     <Routes>
      <Route exact path="/" element={<ListadoEmpleados/>}/>
      <Route exact path="/agregar" element={<AgregarEmpleados/>}/>
      <Route exact path="/editar/:id" element={<EditarEmpleados/>}/>

      {/*CLIENTES */}
      <Route exact path="/clientes" element={<ListadoClientes/>}/>
      <Route exact path="/agregarclientes" element={<AgregarClientes/>}/>
      <Route exact path="/editarclientes/:id" element={<EditarClientes/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
