import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/Receitas.css';
import { useReceitas } from "../context/ReceitasContext"; // Verifique o caminho

export default function Receitas() {
    const { receitas } = useReceitas();

    return (
        <div>
            <Header />
            <h1 className="titulo-receitas"> Receitas adicionadas</h1>
            <div className="row">
                {receitas.map(receita => (
                    <div key={receita.id} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <img src={receita.imagem} alt={receita.titulo} className="card-img-top imagem-receita" />
                                <Link to={`/receitas/${receita.id}`} className="titulo-receita-card">{receita.titulo}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
