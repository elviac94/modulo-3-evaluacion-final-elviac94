const ENDPOINT= 'https://rickandmortyapi.com/api/character/';

const fetchResult = () => fetch(ENDPOINT).then(response => response.json())

export default fetchResult;
