const redux = require("redux");

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        data: amount
    }
}

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        data: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        data: contact
    }
}

const initialState = {
    count: 0,
    allContacts: [],
    
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.data
            }
        case "ADD_CONTACT":
            return {
                ...state,
                allContacts: [...state.allContacts, action.data]
            }
        case "REMOVE_CONTACT": 
            // const arrCopy = [...state.allContacts]
            
            const updatedArr = state.allContacts.filter(contact => contact.name !== action.data)
            return {
                ...state,
                allContacts: updatedArr
            }
        
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addContact({name: "Jenna Jamson", phone: "345-678-9012", email: "jennaM@qmail.com"}))
store.dispatch(addContact({name: "John Doe", phone: "123-456-789", email: "jDoe@qmail.com"}))
store.dispatch(addContact({name: "Mary Jane", phone: "765-432-1098", email: "mJane@qmail.com"}))
store.dispatch(removeContact("Jenna Jameson"))
