import 'Styles/globals.scss';

/**
 * The app page.
 *
 * @returns {any} The Src Page.
 *
 * @param {any} props           The props.
 * @param {any} props.Component The Component.
 * @param {any} props.pageProps The pageProps.
 */
// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({Component, pageProps}) => <Component {...pageProps} />;

export default App;