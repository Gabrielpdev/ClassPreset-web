import Router from 'next/router';
import { useState } from 'react';
import { parseCookies } from '../helpers';
import Header from '../components/Header';

import { Container, Title, User, Description } from '../styles/pages/Home';

interface Props {
  name: string;
}

export default function Home ( props ) {
  const [user ] = useState<Props>(props || '');

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
  
  if (user) {
    const userObject = Object.assign(JSON.parse(user) , { type: 'teacher' })
    if(typeof window === 'undefined'){
      userObject.type === 'teacher' && res.writeHead(302, { Location: '/dashboard' })
      res.end()
    }else{
      userObject.type === 'teacher' && Router.push('/dashboard')
    }
    return userObject;
  }else {
    if(typeof window === 'undefined'){
      res.writeHead(302, { Location: '/' })
      res.end()
    }else{
      Router.push('/')
    }
    return {}
  };
}