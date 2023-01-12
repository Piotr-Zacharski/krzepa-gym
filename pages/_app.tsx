import '../styles/globals.css'
import Layout from "../components/Layout/Layout";

function App({ Component, pageProps }: any) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>

  );
}

App.getInitialProps = async function ({ Component, ctx }: any) {
  let pageProps = {};
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  // @ts-ignore
  pageProps.query = ctx.query;
  return {pageProps};
}

export default App;
