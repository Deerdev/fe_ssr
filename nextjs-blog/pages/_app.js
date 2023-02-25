// you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
import '../styles/globals.css';

/*
The default export of _app.js is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages, or to add global styles as we're doing here.
*/
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}