import { Provider } from 'react-redux';
import configureAppStore from '@app-src/store';
import '../styles/globals.css';

const store = configureAppStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
