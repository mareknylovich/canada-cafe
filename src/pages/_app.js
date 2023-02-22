import App from 'next/app';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'next/router';
import withRedux from 'next-redux-wrapper';

import '../utils/i18n';

// import '../assets/css/markdown.css';
// import '../assets/css/main.css';

import initStore from '../utils/redux';
import { routing } from '../routes';
import { RouteHandler, Header, Footer, Onload } from '../containers';
import { getQuery } from '../utils/navigation';

class MyApp extends App {
  // Fetching serialized(JSON) store state
  static async getInitialProps({ Component, ctx }) {
    await routing({ ...ctx });
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);

    if (typeof window !== 'undefined') {
      const ref = getQuery('ref');

      if (ref) {
        localStorage.setItem('ref', ref);
      }
    }
  }

  render() {
    const { Component, pageProps, store, router } = this.props;

    return (
      <ReduxProvider store={store}>
        <RouteHandler />
        <Onload />
        <CssBaseline />
        {router.pathname.includes('/payment') ? (
          <Component {...pageProps} />
        ) : (
          <div id="Wrapper">
            <Header />
            <div id="Content">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        )}
      </ReduxProvider>
    );
  }
}

export default withRouter(withRedux(initStore, { debug: false })(MyApp));
