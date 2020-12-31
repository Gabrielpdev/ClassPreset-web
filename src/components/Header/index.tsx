import Router from 'next/router';
import { useCallback } from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthProvider';

import { Container, Title, IconContainer } from '../../styles/components/Header';

function Header() {
  const { signOut } = useAuth();
  
  const handleSignOut = useCallback(() => {
    signOut();
    Router.push('/');
  }, [])

  return (
    <Container>
      <Title>Present Class</Title>
      <IconContainer type="button" onClick={handleSignOut} >
        <FiPower size={20} />
      </IconContainer>
    </Container>
  );
}

export default Header;
