const API_URL = 'https://swapi.dev/api';
//reqiosicao do tipo get
export const doGet = path => {
    const url = `${API_URL}${path}`;
    return fetch(url).then(response => response.json());
};

export const getIdFromUrl = (url) => {
    const matches = url.match(/\/([0-9],{0,10})\//);
    console.log(matches);
    return matches && matches[1] ? matches[1] : null;

};