import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Error = () => {
  return <Wrapper>
      <div>
          <h1>4O4</h1>
          <h3>Page Not Found..</h3>
          <NavLink to="/" className="btn">Back</NavLink>
      </div>
  </Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;