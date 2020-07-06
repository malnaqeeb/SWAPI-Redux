import { combineReducers } from "redux";
import filmslist from "./filmslist";
import filmdetails from "./filmdetails";

export default combineReducers({
  filmslist,
  filmdetails,
});
