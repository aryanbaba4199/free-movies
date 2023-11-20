// pages/_app.js
import { MoviesProvider } from '../contexts/MoviesContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MoviesProvider>
      <Component {...pageProps} />
    </MoviesProvider>
  );
}

export default MyApp;
