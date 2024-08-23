import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'; // Adicione um arquivo CSS para estilos adicionais, se necessário

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Sobre Nós</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vivamus lacinia odio vitae vestibulum.
                        </p>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Links Rápidos</h5>
                        <ul className="list-unstyled">
                            <li> <Link to="/" className="text-white"> Home </Link> </li>
                            <li> <Link to="/receitas" className="text-white"> Receitas </Link> </li>
                            <li> <Link to="/adicionar-receita" className="text-white"> Adicionar receita </Link> </li>
                            <li> <Link to="/erro" className="text-white"> Erro </Link> </li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5>Contato</h5>
                        <ul className="list-unstyled">
                            <li>Email: <a href="mailto:info@example.com" className="text-white">felipegorgo25@gmail.com</a></li>
                            <li>Telefone: +55 42 999034458</li>
                       
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <p className="mb-0">© 2024 Sua Empresa. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
