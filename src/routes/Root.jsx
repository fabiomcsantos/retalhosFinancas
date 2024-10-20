import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Login from '../pages/login';
import Menu from '../pages/menu';
import Cliente from '../pages/cliente';
import Historico from '../pages/historico';
import Atendimento from '../pages/atendimento';
import Estoque from '../pages/estoque';


const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Cliente" element={<Cliente />} />
                <Route path="/Historico" element={<Historico />} />
                <Route path="/Atendimento" element={<Atendimento />} />
                <Route path="/Estoque" element={<Estoque />} />
            </Routes>
        </Router>
    );
}

export default Root;