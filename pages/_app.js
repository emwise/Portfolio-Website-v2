import '../styles/global.css'; //Any styles imported in _app.js will be applied globally, to all pages of the application.

export default function App({ Component, pageProps}) {
  return (<Component {...pageProps} />);
}
//This App component is the top-level component which will be common across all the different pages. You can use this App component to keep state when navigating between pages, for example.
//Important: You need to restart the development server when you add pages/_app.js. Press Ctrl + c to stop the server and run: npm run dev
//You also need to restart it whenever you make a change such as importing a global stylesheet.
