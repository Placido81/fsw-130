
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {UglyContextProvider} from "./uglyComponents/UglyContext"

ReactDOM.render(
    <UglyContextProvider>
        <App />
    </UglyContextProvider>, 
    document.getElementById("root")
)

