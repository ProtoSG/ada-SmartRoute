import { Route, Routes } from "react-router-dom";
import { Admin } from "./pages/admin/Admin";
import { Rutas } from "./pages/admin/pages/Rutas";
import { Login } from "./pages/login/Login";
import { Driver } from "./pages/driver/Driver";
import { Inicio } from "./pages/admin/pages/Inicio";
import { Conductores } from "./pages/admin/pages/Conductores";
import { Clientes } from "./pages/admin/pages/Clientes";
import { RutaCon } from "./pages/driver/pages/RutaCon";
import { GenerarRuta } from "./pages/admin/pages/GenerarRuta";
import { PerfilCon } from "./pages/driver/pages/PerfilCon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="" element={<Inicio />} />
        <Route path="conductores" element={<Conductores />} />
        <Route path="rutas" element={<Rutas />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="generar-ruta" element={<GenerarRuta />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/conductor" element={<Driver />}>
        <Route path="" element={<RutaCon />} />
        <Route path="perfil" element={<PerfilCon />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
