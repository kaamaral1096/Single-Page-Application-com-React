import React from 'react';

import { Container, Title } from './styles';
import Card from '../../components/Card/Card';
import eleNao from './img/elenao.jpg';
import './main.css'

function Main() {
  function contentCard(){
    return <div class="imagem"><img src={eleNao}></img></div>
  }
  return (
    <div>
      <Container>
        <Title>PÁGINA PRINCIPAL DO SITE</Title>
      </Container>
      <div class="content">
          <Card 
            content={contentCard()}
            height={'80vh'} 
            padding={'20px'}>
          </Card>
      </div>
    </div>
  );
}

export default Main;