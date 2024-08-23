import React, {useState, useEffect  }from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/Home.css'

export default function Home(){
    const [receitas, setReceitas] = useState([]);

    useEffect(()=>{
        fetch('/receitas.json')
            .then(response => response.json())
            .then(data => setReceitas(data.receitas.slice(0,6)))
            .catch(error => console.error('Receita não encontrada', error));
    }, []);

    return (
        <div className="fundo-home">
            <Header />
            <div className="d-flex align-items-center justify-content-center imagem-header">
                <h1 className="titulo-header">"Aprendemos a cozinhar com a memória dos outros...
                ...E em algum momento, nós fazemos a nossa"</h1>
            </div>
            <div className="separator"></div>
            <h1 className="titulo-receita"> Receitas em destaque</h1>
            <div className="row">
                {receitas.map(receita => (
                    <div key={receita.id} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <img src={receita.imagem} alt={receita.titulo} className="card-img-top imagem-receita" />
                                <Link to={`/Receitas/${receita.id}`} className="titulo-receita-card">{receita.titulo}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}