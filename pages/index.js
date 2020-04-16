import Head from 'next/head';
import App from '../src/App';

export default () => [
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <title>Sandbox G6</title>
  </Head>,
  <main>
    <App />
  </main>,
];
