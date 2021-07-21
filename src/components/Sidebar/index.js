import React from 'react';

import { Container, SidebarLink } from './styles';

function Sidebar() {
  return (
    <Container>
      <SidebarLink to="/">Início</SidebarLink>
      <SidebarLink to="/contact">Contato</SidebarLink>
      <SidebarLink to="/anuncios">Anuncios</SidebarLink>

    </Container>
  );
}

export default Sidebar;