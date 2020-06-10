import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '~/routes';

import { Container } from './styles';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <Container className="app">
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </Container>
  );
}

export default App;
