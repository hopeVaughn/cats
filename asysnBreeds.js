// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, dataFetch) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {


    if (!error) dataFetch(data);
  });

};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed);
};
breedDetailsFromFile('Bombay', printOutCatBreed);