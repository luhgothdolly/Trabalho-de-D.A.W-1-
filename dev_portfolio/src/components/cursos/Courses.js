// 
import React from "react";
// 
import {Row,  Col, Button, Icon} from 'react-materialize';
//
import Curso from "./cursos";
//
import ferry from '../../images/ferry.jpg'

import { Link } from "react-router-dom";

const Courses = () => (
    <Row>
          <h5>Cursos</h5>
        <Col s={20} m={20}>
          <Curso
            titulo="Geografia"
            texto="A Geografia é uma ciência que tem por objetivo o estudo da superfície terrestre e a distribuição espacial de fenômenos significativos na paisagem. Também estuda a relação recíproca entre o homem e o meio ambiente."
            images={ferry}/>
        
          <Curso
            titulo="Anatomia"
            texto="Anatomia é o campo da biologia que estuda a organização estrutural dos seres vivos, incluindo os sistemas, órgãos e tecidos que os constituem, a aparência e posição das várias partes, as substâncias de que são feitos, a sua localização e a sua relação com outras partes do corpo humano."
            images={ferry}/>
          </Col>
          <Link to='/create/course'>
                <Button
                    className="black"
                    icon={<Icon>add</Icon>}
                    large
                    node="button"
                    onClick=""
                    />
            </Link>
    </Row>
  );
export default Courses