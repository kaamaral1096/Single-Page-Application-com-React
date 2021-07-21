import React from 'react';

import { Container, Title } from './styles';

import Card from '../../components/Card/Card';

import './contact.css'

function Contact() {
  let titleCard1Contact = "Fale conosco via Whatsapp";
   function contentCard(){
    return <div class="titleContentCard"> <div class="mr-ml-20"><h3 class="mt-10">Email</h3><span>adasffsdf@gmail.com</span></div> <div class="mr-ml-20"><h3 class="mt-10">Telefone</h3><span>(XX)-XXXX-XXXX</span></div> <div class="mr-ml-20"><h3 class="mt-10">Email</h3><span>adasffsdf@gmail.com</span></div> <div class="mr-ml-20"><h3 class="mt-10">Telefone</h3><span>(XX)-XXXX-XXXX</span></div> <div class="mr-ml-20"><h3 class="mt-10">Email</h3><span>adasffsdf@gmail.com</span></div> <div class="mr-ml-20"><h3 class="mt-10">Telefone</h3><span>(XX)-XXXX-XXXX</span></div></div>
  }
  return (
    <div>
      <Container>
        <Title>CONTATO</Title>
      </Container>
      <div class="content">
          <Card 
            title={titleCard1Contact} 
            content={contentCard()} 
            height={'80vh'} 
            padding={'20px'}/>
      </div>
    </div>
  );
}

export default Contact;