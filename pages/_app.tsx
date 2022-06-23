import '../styles/globals.css';
import type {AppContext, AppProps} from 'next/app';
// import App from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//     const appProps = await App.getInitialProps(appContext);
//
//    return { ...appProps }
// }

export default MyApp
