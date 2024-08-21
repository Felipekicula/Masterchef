import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Receitas from './pages/receitas';
import Erro from './pages/erro';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/Receitas" element={<Receitas/>}> </Route>
                <Route path="*" element={<Erro/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
