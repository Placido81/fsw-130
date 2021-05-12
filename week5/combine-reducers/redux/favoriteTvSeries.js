function favoriteTvSeries(series) {
    return {
        type: "ADD_FAVORITE_TV_SERIES",
        payload: series
    }
}

function removefavoriteTvSeries(series) {
    return {
        type: "REMOVE_FAVORITE_TV_SERIES",
        payload: series
    }
}

function favoriteTvSeriesReducer(favoriteTvSeries = [], action) {
    switch(action.type) {
        case "ADD_FAVORITE_TV_SERIE":
            return [...favoriteTvSeries, action.payload]
        case "REMOVE_FAVORITE_TV_SERIES": {            
            const updatedArr = favoriteTvSeries.filter(series => series.toLowerCase() !== action.payload.toLowerCase())
            return updatedArr
        }
        default:
            return favoriteTvSeries
    }
}