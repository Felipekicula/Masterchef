import React from "react";
import RoutesApp from "./routes";
import { ReceitasProvider } from './context/ReceitasContext'; // Verifique o caminho

export default function App() {
    return (
        <ReceitasProvider>
            <div className="App">
                <RoutesApp />
            </div>
        </ReceitasProvider>
    );
}
