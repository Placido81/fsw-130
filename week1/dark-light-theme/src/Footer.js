import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Footer(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`} id="footer">
                    <p>Mark Olivo</p>
                    <p>Light & Dark Theme</p>
                </footer>
            )}
        </ThemeContextConsumer>

    )    
}

export default Footer
