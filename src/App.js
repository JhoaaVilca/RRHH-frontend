import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navar from "./plantillla/Navar";
import AgregarEmpleados from "./empleados/AgregarEmpleados";


function App() {
  return (
    <div className="container">
     <BrowserRouter>
     <Navar/>
     <Routes>
      <Route exact path="/" element={<ListadoEmpleados/>}/>
      <Route exact path="/agregar" element={<AgregarEmpleados/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
