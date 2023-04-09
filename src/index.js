import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import './css/styles.css';
import getRefs from './get-refs';

import {fetchCountries} from './fetch-countries';
// import {renderListOfCountries, renderOneCountry} from './render-info'
// import RENDER from './render-info';
// console.log(RENDER);
// const { renderListOfCountries, renderOneCountry } = RENDER;

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(e) {
    clearInfo();
    const name = e.target.value.toLowerCase().trim();
    if (!name) {
        return;
    };

    fetchCountries(name)
        .then(result => {
            if (result.length >= 2 && result.length <= 10) {
                renderListOfCountries(result);
            
            } else if (result.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
                clearInfo();
            } else if (result.length = 1) {
                // console.log(result)
                renderOneCountry(result);
            };
        })
        .catch(reject => {
            Notiflix.Notify.failure('"Oops, there is no country with that name"');
            clearInfo();
        
        });
    
};

const renderListOfCountries = countries => {
    const markUp = countries.map(({ flags, name }) =>
        `<li class="country-list__item"> 
        <img class="icon-img" src="${flags.svg}" alt="A flag" width="30"/>
        ${name.official}</li>`
    ).join('');
    
    refs.countryList.innerHTML = markUp;
};

const renderOneCountry = country => {
    let countryObj = country[0];
    // console.log(countryObj.name.official);
    const { name, capital, population, languages, flags } = countryObj;
   
    const markUp =
        `<h1><img class="icon-img" src="${flags.svg}" alt="A flag" width="30"/> ${name.official}</h1>
      <ul class="country-info__list">
        <li class="country-info__item"><span class="item-title">Capital: </span>${capital}</li>
        <li class="country-info__item"><span class="item-title">Population: </span>${population}</li>
        <li class="country-info__item"><span class="item-title">Laguages: </span>${addLanguagesList(languages)}</li>
      </ul>`
    refs.countryInfo.innerHTML = markUp;
};


const addLanguagesList = arr => Object.values(arr).join(', ');


const clearInfo = () => {
refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
}
