import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Receitas from './pages/receitas';
import ReceitaDetalhes from "./pages/receitasDetalhes";
import Erro from './pages/erro';
import AdicionarReceita from "./pages/adicionarReceita";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/receitas" element={<Receitas />} />
                <Route path="/receitas/:id" element={<ReceitaDetalhes />} />
                <Route path="/adicionar-receita" element={<AdicionarReceita />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}
