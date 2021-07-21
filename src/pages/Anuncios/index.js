import React from 'react';

import { Container, Title } from './styles';
import './anuncios.css';
import Card from '../../components/Card/Card';

function Anuncios() {

  function contentCardCard(){
    let titleCard1 = "Coronavac"
    let titleCard2 = "Pfizer"
    let titleCard3 = "Covaxin"
    let titleCard4 = "Astrazenica"
    let contentCards1 = "R$ 3,40";
    let contentCards2 = "R$ 4,00";
    let contentCards3 = "R$ 10,09";
    let contentCards4 = "R$ 3,29";

    return <div class="content"><Card title={titleCard1} content={contentCards1} width={'300px'} /> <Card title={titleCard2} content={contentCards2} width={'300px'}/> <Card title={titleCard3} content={contentCards3} width={'300px'}/> <Card title={titleCard4} content={contentCards4} width={'300px'}/> </div>
  }

  return (
    <div>
      <Container>
        <Title>ANÚNCIOS</Title>
      </Container>
      <Card content={contentCardCard()} height={'80vh'}/>

    </div>
  );
}

export default Anuncios;