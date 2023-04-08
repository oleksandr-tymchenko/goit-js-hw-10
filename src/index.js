import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import './css/styles.css';
import getRefs from './get-refs';
import FETCH from './fetch-countries';

const DEBOUNCE_DELAY = 3000;

const refs = getRefs();
// console.log(refs);

refs.input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(e) {
    const name = e.target.value.trim();
    
    FETCH.fetchCountries(name)
        .then(result => {

            // console.log(result.length)
            if (result.length >= 2 && result.length <= 10) {
                renderListOfCountries(result);
                // console.log(result.Object.values(name))
            } else if (result.length > 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            } else if (result.length = 1) {
                console.log(result)
                renderOneCountry(result);
            }
    })
    
    
    
};


function renderListOfCountries(countries) {
    const markUp = countries.map(country =>
        `<li><img src="${country.flags.svg}" alt="A flag" width="30"  />${country.name.official}</li>`).join('');
    console.log(markUp);
    refs.countryList.innerHTML = markUp;
};

function renderOneCountry(country) {
    console.log(country)
    // const markUp =
    //     `<h1>${country.name}</h1>
    //   <ul>
    //     <li><span class="item-title">Capital:</span>${country.capital}</li>
    //     <li><span class="item-title">Population:</span>${country.population}</li>
    //     <li><span class="item-title">Laguages:</span>${country.languages}</li>
    //   </ul>`
    // refs.countryInfo.innerHTML = markUp;
}