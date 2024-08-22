import React from "react";
import Header from "../components/header";
import '../styles/Erro.css';
import error404 from '../styles/imagens/erro404.png'; 

export default function Erro() {
    return (
        <div className="error">
            <Header/>
            <div className="container text-center d-flex flex-column align-items-center justify-content-center min-vh-100">
                <img className="error img-fluid-max" src={error404} alt="Error 404" />
            </div>
        </div>
    );
}
