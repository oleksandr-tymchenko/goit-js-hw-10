export const renderListOfCountries = countries => {
    const markUp = countries.map(({ flags, name }) =>
        `<li><img src="${flags.svg}" alt="A flag" width="30"/>
        ${name.official}</li>`
    ).join('');
    
    refs.countryList.innerHTML = markUp;
};

export const renderOneCountry = country => {
    let countryObj = country[0];
    // console.log(countryObj.name.official);
    const { name, capital, population, languages, flags } = countryObj;
   
    const markUp =
        `<h1><img src="${flags.svg}" alt="A flag" width="30"/> ${name.official}</h1>
      <ul>
        <li><span class="item-title">Capital: </span>${capital}</li>
        <li><span class="item-title">Population: </span>${population}</li>
        <li><span class="item-title">Laguages: </span>${addLanguagesList(languages)}</li>
      </ul>`
    refs.countryInfo.innerHTML = markUp;
};


export const addLanguagesList = arr => Object.values(arr).join(', ');
    







// function renderListOfCountries(countries) {
//     const markUp = countries.map(({flags, name}) =>
//         `<li><img src="${flags.svg}" alt="A flag" width="30"/>
//         ${name.official}</li>`
//     ).join('');
    
//     refs.countryList.innerHTML = markUp;
// };

// function renderOneCountry(country) {
//     let countryObj = country[0];
//     // console.log(countryObj.name.official);
//     const { name, capital, population, languages, flags } = countryObj;
   
//     const markUp =
//         `<h1><img src="${flags.svg}" alt="A flag" width="30"/> ${name.official}</h1>
//       <ul>
//         <li><span class="item-title">Capital: </span>${capital}</li>
//         <li><span class="item-title">Population: </span>${population}</li>
//         <li><span class="item-title">Laguages: </span>${addLanguagesList(languages)}</li>
//       </ul>`
//     refs.countryInfo.innerHTML = markUp;
// };

// function addLanguagesList(arr) {
    
//     return (Object.values(arr).join(', '));
// };

// export default { renderListOfCountries,  renderOneCountry};