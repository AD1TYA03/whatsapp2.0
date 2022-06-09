import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import styled from "styled-components";

const Login = () => {
    const signIn=()=>{
        auth.signInWithPopup(provider).catch(alert);

    }
  
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" />
        <Button variant="outlined" onClick={signIn} >
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: white;
  border-radius: 5px;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px; 
  margin-bottom: 50px;
`;