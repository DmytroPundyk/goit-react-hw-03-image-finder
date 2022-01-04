import Template from 'react-loader-spinner';
import styled from 'styled-components';
import React from 'react';

const Spinner = styled.div`
  display: grid;
  place-content: center;
`;

const Loader = () => (
  <Spinner>
    <Template type="TailSpin" color="#02be6e" height={100} width={100} />
  </Spinner>
);

export default Loader;
