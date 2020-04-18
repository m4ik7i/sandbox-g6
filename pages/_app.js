import { Provider } from 'react-redux';
import Store from '../src/Store';

import 'semantic-ui-css/semantic.min.css';

export default ({ Component, pageProps }) => {
  const store = Store.instance();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
