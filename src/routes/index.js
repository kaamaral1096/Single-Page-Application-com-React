import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Contact from '../pages/Contact';
import Anuncios from '../pages/Anuncios';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/anuncios" exact component={Anuncios} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
}