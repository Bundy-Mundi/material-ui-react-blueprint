import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DefaulLayout from "../Layouts/layout.default.jsx";
import styled from "styled-components";

const Div = styled(Container)`
    height: 100vh;
`;

const Home = () => {
  return (
    <DefaulLayout className="Home">
        <Div>
        </Div>
    </DefaulLayout>
  );
};

export default Home;
