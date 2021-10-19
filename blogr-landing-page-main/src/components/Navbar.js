import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Navigation>
      <LeftSection>
        <Logo>
          <img src='/images/logo.svg' alt='' />
        </Logo>
        <ul>
          <li>
            <a href='#'>Product</a>
            <img src='/icon-arrow-light' alt='' />
          </li>
          <li>
            <a href='#'>Company</a>
            <img src='/icon-arrow-light' alt='' />
          </li>
          <li>
            <a href='#'>Connect</a>
            <img src='/icon-arrow-light' alt='' />
          </li>
        </ul>
          </LeftSection>
          <RightSection>
              <LoginButton>
                  <button>Login</button>
              </LoginButton>
              <SignUpButton>
                  <button>Sign Up</button>
              </SignUpButton>
          </RightSection>
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.nav`
background-color: red;
padding: 25px;
height: 25vh;
max-height: 500px;
width: 100vw;
position: fixed;
display: flex;
align-items: center;

`;

const Logo = styled.div`
  height: 30px;
  width: 75px;
  background-color: red;
  img {
    height: 100%;
    width: 100%;
  }
`;

const LeftSection = styled.div`
display: flex;
flex: 1;
align-items: center;
padding: 20px;
  ul {
      display: flex;
      align-items: center;
      justify-content: space-space-between;
    list-style-type: none;
    
  

    li a{
        padding: 5px;
       color: white;
        text-decoration: none;
    }
    li img{
        height: 100px;
        background: black;
    }
  }
`;

const RightSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const LoginButton = styled.div``

const SignUpButton = styled.div``


