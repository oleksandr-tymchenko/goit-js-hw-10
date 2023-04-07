import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import './css/styles.css';
import getRefs from './get-refs';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();
console.log(refs);

refs.input.addEventListener('input', debounce(onSearchCountry, 300));

function onSearchCountry(e) {
    const name = e.currentTarget.value;
    console.log(name);
    
};
