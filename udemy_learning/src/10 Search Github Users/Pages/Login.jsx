import React from 'react'
import styled from 'styled-components';
import loginImage from '../Images/login-img.svg';

const Login = () => {
  return (
    <Wrapper>
        <div className='container'>
            <img src={loginImage} alt="User Details"/>
            <h1>Users</h1>
            <button className='btn'>Login</button>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

export default Login