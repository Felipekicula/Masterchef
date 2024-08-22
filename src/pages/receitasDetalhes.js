import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";

export default function ReceitasDetalhes(){
    const {id} = useParams();
    const [receita, setReceita] = useState(null);

    useEffect(()=>{
        fetch('/receitas.json')
        .then(response => response.json())
        .then(data => {
            const receitaEncontrada = data.receitas.find(r=> r.id ===parseInt(id));
            setReceita(receitaEncontrada);
        })
        .catch(error => console.error('Receita não encontrada', error));
    }, [id]);

    if (!receita) return <div>Carregando....</div>

    return(
        <div>
            <Header/>
            <h1>{receita.titulo}</h1>
            <h2>Ingredientes:</h2>
            <ul>
                {receita.ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                ))}
            </ul>
            <h2>Modo de preparo:</h2>
            <p>{receita.modoPreparo}</p>
        </div>
    )





}