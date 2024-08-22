import React, {useState, useEffect  }from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import '../styles/Home.css'

export default function Home(){
    const [receitas, setReceitas] = useState([]);

    useEffect(()=>{
        fetch('/receitas.json')
            .then(response => response.json())
            .then(data => setReceitas(data.receitas.slice(0,6)))
            .catch(error => console.error('Receita não encontrada', error));
    }, []);

    return(
        <div className="fundo-home">
            <Header/>
            <div className="d-flex align-items-center justify-content-center imagem-header">
                <h1 className="titulo-header">"Aprendemos a cozinhar com a memória dos outros...
                ...E em algum momento, nós fazemos a nossa"</h1>
            </div>
            <div className="separator"></div>
            <div>
                <h2>Receitas em destaque</h2>
                <div>
                    {receitas.map(receita => (
                        <div key={receita.id}>
                            <h3>{receita.titulo}</h3>
                            <Link to={`/Receitas/${receita.id}`}>Ver mais detalhes</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}