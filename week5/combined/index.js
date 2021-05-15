import store from "./redux/store.js";
import { addMovie, removeMovie, getAllMovies } from "./redux/movies.js";
import { addTvShow, removeTvShow, getAllTvShows } from "./redux/tvShows.js";

//ADD MOVIE
store.dispatch(addMovie("Blow"));
store.dispatch(addMovie("James Bond"));
store.dispatch(addMovie("Casino"));
store.dispatch(addMovie("Scarface"));

//ADD TV SHOW
store.dispatch(addTvShow("Start-Up"));
store.dispatch(addTvShow("The All American"));
store.dispatch(addTvShow("ShameLess"));
store.dispatch(addTvShow("Drug. Inc"))

//REMOVE MOVIE
store.dispatch(removeMovie("Blow"));
store.dispatch(removeMovie("Casino"));

//REMOVE TV SHOW
store.dispatch(removeTvShow("Shame-Less"));

//GET ALL MOVIES
store.dispatch(getAllMovies());

//GET ALL TV SHOWS
store.dispatch(getAllTvShows());