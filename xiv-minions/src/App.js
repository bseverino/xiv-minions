import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import logo from './img/logo.png';

import MinionPage from './components/MinionPage';
import MinionList from './components/MinionList';
import SearchForm from './components/SearchForm';

const Wrapper = styled.div`
  margin: 0 auto -50px;
  position: relative;
  min-height: 100vh;
  width: 90%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
`;

function App() {
  return (
    <Wrapper>      
      <img className='logo' src={logo} alt='Final Fantasy XIV Minions' />
      <Route exact path='/' component={SearchForm} />
      <Route exact path='/' component={MinionList} />
      <Route path='/:id' component={MinionPage} />
      <Footer>
          <p>©2010-2019 SQUARE ENIX CO., LTD. All Rights Reserved.</p>
      </Footer>      
    </Wrapper>
  );
}

export default App;
