import { Routes, Route, Navigate } from "react-router-dom";

import Listagem from "../pages/Listagem/Listagem";
import Cadastro from "../pages/Cadastro/Cadastro";
import Detalhe from "../pages/Detalhe/Detalhe";
import NaoEncontrado from "../pages/NaoEncontrado/NaoEncontrado";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pontos" />} />

      <Route path="/pontos" element={<Listagem />} />

      <Route path="/pontos/novo" element={<Cadastro />} />

      <Route path="/pontos/:id" element={<Detalhe />} />

      <Route path="/pontos/:id/editar" element={<Cadastro />} />

      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  );
}

export default AppRoutes;