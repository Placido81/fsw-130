import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>Light And {props.data}  {context.theme === "light" ? "Light" : "Dark"} Themed</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header