import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer"
import '../styles/AdicionarReceita.css';
import { useReceitas } from "../context/ReceitasContext";

export default function AdicionarReceita() {
    const { receitas, setReceitas } = useReceitas();
    const [mensagemSucesso, setMensagemSucesso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const maiorId = receitas.length > 0 ? Math.max(...receitas.map(receita => receita.id)) : 0;
        const novoId = maiorId + 1;

        const novaReceita = {
            id: novoId,
            titulo: e.target.titulo.value,
            ingredientes: e.target.ingredientes.value,
            modoPreparo: e.target.modoPreparo.value,
            imagem: e.target.imagem.value
        };

        // Atualizar o estado local
        const receitasAtualizadas = [...receitas, novaReceita];
        setReceitas(receitasAtualizadas);

        // Enviar a nova receita para a API
        fetch('/api/receitas', { // Ajuste o endpoint conforme necessário
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novaReceita),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Receita adicionada com sucesso', data);
            setMensagemSucesso('Receita adicionada com sucesso!');
            // Limpar a mensagem após 3 segundos
            setTimeout(() => setMensagemSucesso(''), 3000);
        })
        .catch(error => {
            console.error('Erro ao adicionar receita', error);
            setMensagemSucesso('Erro ao adicionar receita.');
            // Limpar a mensagem após 3 segundos
            setTimeout(() => setMensagemSucesso(''), 3000);
        });
    };

    return (
        <>
            <Header />
            <div className="adicionar-receita-container">
                <h1 className="form-titulo">Adicionar Nova Receita</h1>
                {mensagemSucesso && <div className="alert alert-success">{mensagemSucesso}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" id="titulo" name="titulo" className="form-control" placeholder="Título" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ingredientes">Ingredientes</label>
                        <textarea id="ingredientes" name="ingredientes" className="form-control" placeholder="Ingredientes" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="modoPreparo">Modo de Preparo</label>
                        <textarea id="modoPreparo" name="modoPreparo" className="form-control" placeholder="Modo de Preparo" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">URL da Imagem</label>
                        <input type="text" id="imagem" name="imagem" className="form-control" placeholder="URL da Imagem" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-submit">Adicionar Receita</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}
