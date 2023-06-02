import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import UserContextProvider from '../hooks/useUser';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <Layout>
          <Toaster
            position='top-center'
            toastOptions={{
              style: {
                color: 'white',
                backgroundColor: '#181817',
                border: '1px solid #272724',
                fontSize: '14px',
                height: '44px',
              },
              success: {
                iconTheme: {
                  primary: '#85a054',
                  secondary: 'white',
                },
              },
              error: {
                iconTheme: {
                  primary: '#b64740',
                  secondary: 'white',
                },
              },
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </Provider>
  );
}
