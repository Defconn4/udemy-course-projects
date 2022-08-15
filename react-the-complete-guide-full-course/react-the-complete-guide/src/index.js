import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App"; // We can omit the `.js` extension since App is one of our own files (relative import path).

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
