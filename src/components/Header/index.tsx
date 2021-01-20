import Router from 'next/router';
import { useCallback } from 'react';
import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/AuthProvider';

import { Head, Title, IconContainer } from '../../styles/components/Header';

function Header() {
  const { signOut } = useAuth();
  
  const handleSignOut = useCallback(() => {
    signOut();
    Router.push('/');
  }, [])

  return (
    <Head>
      <div className="container">
        <Title>Present Class</Title>
        <IconContainer type="button" onClick={handleSignOut} >
          <FiPower size={20} />
        </IconContainer>
      </div>
    </Head>
  );
}

export default Header;
