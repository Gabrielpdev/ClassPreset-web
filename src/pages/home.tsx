import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../hooks/AuthProvider';
import { parseCookies } from '../helpers';
import Header from '../components/Header';

import { Container, Title, User, Description } from '../styles/pages/Home';

interface Props {
  name: string;
}

export default function Home ( props ) {
  const { push } = useRouter();
  const { signOut } = useAuth();
  const [user, setUser] = useState<Props>(props || '');

  const handleSignOut = () => {
    signOut();
    push('/');
  }

  return (
    <Container>
      <Header />
      <main>
        <Title>Present Class</Title>
        <User>{`Bem-vindo(a) ${user.name}`}</User>

        <Description>
          Clique no link enviado pelo seu professor para confirmar sua presença
        </Description>

      </main>
    </Container>
  )
}

Home.getInitialProps = async ({ req, res }) => {
  const { user } = parseCookies(req)
  
  if (!user) {
    if(typeof window === 'undefined'){
      res.writeHead(302, { Location: '/' })
      res.end()
    }else{
      Router.push('/')
    }
    return {}
  };

  return JSON.parse(user);
}