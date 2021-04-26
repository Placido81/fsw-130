
          
import React, { Component } from "react"
 
const { Provider, Consumer } = React.createContext()

class UglyContextProvider extends Component {
    state = {
        uglyThings: [
            {
                id: '',
                title: 'Happy Fish',
                url: "http://4.bp.blogspot.com/-jeIDeGVXuzU/TbJoGJ2LnuI/AAAAAAAAAo0/JZxVsWMSU-k/s1600/ugly%2Bfish.jpg",
                description: 'Eep',
                isEditable: false,
                comments: [
                    {
                        id: '',
                        text: "Scary!"
                    },
                    {
                        id: '',
                        text: "OMG!"
                    }
                ]
            }
        ]
    }

    addUglyThing = (newUgly) => {
        this.setState({ uglyThings: [ newUgly, ...this.state.uglyThings] })
    }

    deleteUglyThing = (uglyCardId) => {
        let templies = this.state.uglyThings
        const index = templies.findIndex(element => element.id === uglyCardId)
        templies.splice(index, 1);
        this.setState({ uglyThings: templies })
    }

    editUglyThing = (updates) => {

        let templies = this.state.uglyThings
        const index = templies.findIndex(element => element.id === updates.id)
        templies[index] = updates
        this.setState({ uglyThings: templies })

    }

    setEditable = (uglyCardId) => {
        let templies = this.state.uglyThings
        const index = templies.findIndex(element => element.id === uglyCardId)
        if (templies[index].isEditable === undefined || templies[index].isEditable === false) {
            templies[index] = { ...templies[index], isEditable: true }
        } else {
            templies[index] = { ...templies[index], isEditable: false }
        }
        this.setState({ uglyThings: templies })
    }

    addComment = (newComment, uglyCardId) => {
        let templies = this.state.uglyThings
        const index = templies.findIndex(element => element.id === uglyCardId)
        templies[index].comments = [...templies[index].comments, newComment]
        this.setState({ uglyThings: templies })
    }

    deleteComment = (commentId, uglyCardId) => {
        let templies = this.state.uglyThings
        const index = templies.findIndex(element => element.id === uglyCardId)
        const commentIndex = templies[index].comments.findIndex(element => element.id === commentId)
        templies[index].comments.splice(commentIndex, 1);
        this.setState({ uglyThings: templies })
    }

    render() {
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                addUglyThing: this.addUglyThing,
                addComment: this.addComment,
                deleteUglyThing: this.deleteUglyThing,
                editUglyThing: this.editUglyThing,
                setEditable: this.setEditable,
                deleteComment: this.deleteComment
            }}>
                {this.props.children}
            </Provider>
        )
    }

}

export { UglyContextProvider, Consumer as UglyContextConsumer }

 