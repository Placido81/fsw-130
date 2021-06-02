function setfavoriteMoviesTitle(title) {
    return {
        type: "SET_FAVORITEMOVIES_TITLE",
        payload: title
    }
}

function incrementViewCount() {
    return {
        type: "INCREMENT_VIEW_COUNT"
    }
}

function upvoteMovies() {
    return {
        type: "UPVOTE_MOVIES"
    }
}

function downvoteMovies() {
    return {
        type: "DOWNVOTE_MOVIES"
    }
}

const initialState = {
    title: "",
    viewCount: 0,
    votes: {
        up: 0,
        down: 0
    }
}

function favoriteMoviesReducer(favoriteMovies = initialState, action) {
    switch(action.type) {
        case "INCREMENT_VIEW_COUNT":
            return {
                ...favoriteMovies,
                viewCount: favoriteMovies.viewCount + 1
            }
        case "SET_YOUTUBE_TITLE":
            return {
                ...favoriteMovies,
                title: action.payload
            }
        case "UPVOTE_MOVIES":
            return {
                ...favoriteMovies,
                votes: {
                    ...favoriteMovies.votes,
                    up: favoriteMovies.votes.up + 1
                }
            }
        case "DOWNVOTE_MOVIES":
            return {
                ...favoriteMovies,
                votes: {
                    ...favoriteMovies.votes,
                    down: favoriteMovies.votes.down + 1
                }
            }
        default:
            return favoriteMovies
    }
}