import { SET_REGIONS, SET_COUNTRIES } from "../constant";
import { combineReducers } from "redux";
const regionState = {
  regionData: [],
  loading:true,
};

const countryState = {
  countryData: [],
  loading:true,
};


const regionsReducer = (state = regionState, action) => {
  switch (action.type) {
    case SET_REGIONS:
      return { regionData: action.payload, loading:false };
    default:
      return state;
  }
};

const countriesReducer = (state = countryState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { countryData: action.payload, loading:false };
    default:
      return state;
  }
};



const reducers = combineReducers({
  allRegions: regionsReducer,
  allCountries: countriesReducer,
});
export default reducers;