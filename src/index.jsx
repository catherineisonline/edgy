import { createRoot } from "react-dom/client";
import App from "./App";
import "./core-ui/index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
