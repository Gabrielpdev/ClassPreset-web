// pages/_app.tsx
import { CookiesProvider } from "react-cookie"
import { AppProps } from 'next/app';
import { AuthProvider } from '../hooks/AuthProvider';
import { ToastProvider } from '../hooks/ToastProvider';
import GlobalStyle from "../styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <AuthProvider>
      <CookiesProvider>
        <ToastProvider>
          <GlobalStyle/>
          <Component {...pageProps} />
        </ToastProvider>
      </CookiesProvider>
    </AuthProvider>
  );
};

export default App;