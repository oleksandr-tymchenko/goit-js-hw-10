export default function getRefs(){
    return {
        input: document.getElementById('search-box'),
        countryList: document.querySelector('.country-list'),
        countryInfo: document.querySelector('.country-info')
    };
}