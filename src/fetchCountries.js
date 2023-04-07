const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries(name) {
    const url = `${BASE_URL}/name/${name}`;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};

export default { fetchCountries };