// Desc: index.js is the entry point of the application. It renders the App component into the root DOM element.
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";

import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
