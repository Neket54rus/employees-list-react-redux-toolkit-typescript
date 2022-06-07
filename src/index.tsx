import ReactDOM from "react-dom/client"

import { App } from "./components"

import "./scss/index.scss"

const rootElem = document.getElementById("root")

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem)
	root.render(<App />)
}
