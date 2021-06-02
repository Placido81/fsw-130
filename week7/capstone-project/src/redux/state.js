const redux = require("redux")
const { combineReducers, createStore } = redux
const contactsReducer = require("./contactus")

const rootReducer = combineReducers ({
    contacts: contactsReducer.default
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store