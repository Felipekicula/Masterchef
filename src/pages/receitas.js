import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

export default function Receitas(){
    const [receitas, setReceitas] = useState([]);

    useEffect(()=>{
        fetch('./receitas.json')
            .then(response => response.json())
            .then(data => setReceitas(data.receitas))
            .catch(error => console.error('Receita não encontrada', error));
    }, []);

    return(
        <div>
            <Header/>
            <h1>Receitas</h1>
            <div>
                {receitas.map(receita=> (
                    <div key={receita.id}>
                        <h3>{receita.titulo}</h3>
                        <Link to={`/Receitas/${receita.id}`}>Ver mais detalhes</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}