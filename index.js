const {City} = require('./app/city');

const bBottom = new City('Bikini bottom', 'Bob l\'éponge');

setInterval(() => bBottom.showShit(), 1000);
setInterval(() => bBottom.getShit(), 2000);
