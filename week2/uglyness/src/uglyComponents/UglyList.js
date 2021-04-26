import React from "react"
import UglyCard from "./UglyCard"

function UglyList(props) {
    const uglyData = props.uglyThings.map(uglycard => (
        <UglyCard
            key={uglycard.id}
            id={uglycard.id}
            title={uglycard.title}
            url={uglycard.url}
            description={uglycard.description}
            comments={uglycard.comments}
            isEditable={uglycard.isEditable}
            deleteUglyThing={props.deleteUglyThing}
            setEditable={props.setEditable}
            editUglyThing={props.editUglyThing}
        />
    ))
    return (
        <div className='ugly-list'>
            <p>List O' Ugly</p>
            {uglyData}
        </div>
    )
}
export default UglyList