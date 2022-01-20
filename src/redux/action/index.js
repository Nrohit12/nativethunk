import {SET_REGIONS, SET_COUNTRIES} from '../constant';
import {api} from './api';
import axios from 'axios';

export const setRegions = () => async dispatch => {

  await axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      let temp = [];
      let colors = ['#FBFFE2', '#A6CF98', '#D6E5FA', '#FEECE9', '#F4DFBA','#EA99D5' ]
      response.data.map((regions) => {
        return temp.includes(regions.region) ? null : temp.push(regions.region);
      });
      let regions = []
      temp.map((region, index) => {
        regions.push({region: region, color: colors[index]})
      })
      dispatch({type: SET_REGIONS, payload: regions});
    })
    .catch(error => {
      console.log('There has been a problem while fetching' + error.message);
      throw error;
    });
};

export const setCountries = name => async dispatch => {
  dispatch({type: SET_COUNTRIES, payload: []});
  await axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      let temp = [];

      response.data.map(country => {
        return country.region === name ? temp.push(country) : null;
      });
      dispatch({type: SET_COUNTRIES, payload: temp});
    })
    .catch(error => {
      console.log('There has been a problem while fetching' + error.message);
      throw error;
    });
};
