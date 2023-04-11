import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
import { useEffect } from "react";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // require("bootstrap/dist/js/bootstrap.min.js");
    require("../styles/javascript.js");
}, []);
  return <Component {...pageProps} />
}