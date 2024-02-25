import { CartContextProvider } from "@components/CartContext";
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="app">
      <CartContextProvider>
        <Provider>
          <Nav />
          <Component {...pageProps} />;
        </Provider>
        <Footer />
      </CartContextProvider>
    </div>
  );
}
