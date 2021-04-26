
import React from "react"
import "./styles.css"
import Header from "./components/Header"
import UglyForm from "./uglyComponents/UglyForm"
import UglyList from "./uglyComponents/UglyList"

import { UglyContextConsumer } from "./uglyComponents/UglyContext"

function App() {
    return (
        <UglyContextConsumer>
            {context => (
                <div>
                    <Header />
                    <UglyForm
                        buttonText="Add Ugly"
                        submit={context.addUglyThing}
                    />
                    <UglyList
                        uglyThings={context.uglyThings}
                        deleteUglyThing={context.deleteUglyThing}
                        editUglyThing={context.editUglyThing}
                        setEditable={context.setEditable}
                        isEditable={context.isEditable}
                    />
                    
                    </div> 
                     
            )}
            
        </UglyContextConsumer>
    )
}
export default App

