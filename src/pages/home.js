import React from "react";
import Header from "../components/header";
import '../styles/Home.css'

export default function Home(){
    return(
        <div className="fundo-home">
            <Header/>
            <div className="d-flex align-items-center justify-content-center imagem-header"></div>
            <h1>Home</h1>
        </div>
    );
}