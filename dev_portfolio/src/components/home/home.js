// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Informações pessoais</h5>
        <Card>
          <div>
            <p><b>Sobre</b></p>Estudo T.I na UNASP e gosto bastante de programar sites. Em meus tempos livres gosto de assitir TV e ouvir música</p>
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;