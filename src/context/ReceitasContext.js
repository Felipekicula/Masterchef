// ReceitasContext.js
import React, { createContext, useState, useEffect } from 'react';

const ReceitasContext = createContext();

export function ReceitasProvider({ children }) {
    const [receitas, setReceitas] = useState([]);

    useEffect(() => {
        fetch('/api/receitas') // Ajuste o endpoint conforme necessário
            .then(response => response.json())
            .then(data => setReceitas(data.receitas || []))
            .catch(error => console.error('Erro ao carregar receitas', error));
    }, []);

    return (
        <ReceitasContext.Provider value={{ receitas, setReceitas }}>
            {children}
        </ReceitasContext.Provider>
    );
}

export const useReceitas = () => React.useContext(ReceitasContext);
