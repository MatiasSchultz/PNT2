const stringsEnMinuscula = [
    'hola', 
    'mundo', 
    'esto', 
    'es', 
    'un', 
    'ejemplo'
];
const pStrings = document.getElementById('stringsEnMinuscula');
pStrings.textContent = stringsEnMinuscula.join(', ');

function convertirAMayusculas(array) {
    const stringsEnMayuscula = stringsEnMinuscula.map(str => str.toUpperCase());
    const pMayuscula = document.getElementById('stringsEnMayuscula');
    pMayuscula.textContent = stringsEnMayuscula.join(', ');
    return stringsEnMayuscula;
}