

const redux = require("redux")


const initialState = {
    
    
    favotiteTvSeries: [],
        title: "Start-Up",
        
        viewCount: 0,
        votes: {
            up: 28,
            down: 0
        }
    }

const movieState = {
    favoriteMovies: [],
        title: "One Nation Under Attack ,Up In Smoke",
        viewCount: 10,
        votes: {
            up: 29,
            down: 0
        }
    }


console.log(movieState)

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_FAVORITE_MOVIES":
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload]
            }
        case "REMOVE_FAVORITE_MOVIES": {
            const arrCopy = [...state.favoriteMovies]
            
            const updatedArr = state.favoriteMovies.filter(movies => movies.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                favoriteMovies: updatedArr
            }
        }
        case "INCREMENT_VIEW_COUNT":
            return {
                ...state,
                favoriteTvSeries: {
                    ...state.favoriteTvSeries,
                    viewCount: state.favoriteTvSeries.viewCount + 1
                }
            }
        case "SET_FAVORITE_TV_SERIES_TITLE":
            return {
                ...state,
                favoriteTvSeries: {
                    ...state.favoriteTvSeries,
                    title: action.payload
                }
            }
        case "UPVOTE_TV_SERIES":
            return {
                ...state,
                favoriteTvSeries: {
                    ...state.favoriteTvSeries,
                    votes: {
                        ...state.favoriteTvSeries.votes,
                        up: state.favoriteTvSeries.votes.up + 1
                    }
                }
            }
        case "DOWNVOTE_TV_SERIES":
            return {
                ...state,
                watchMovies: {
                    ...state.watchMovies,
                    votes: {
                        ...state.watchMovies.votes,
                        down: state.watchMovies.votes.down + 1
                    }
                }
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

