const Card = require('./Card.js');
const Grunt = require('./Grunts.js');
const Legendary = require('./Legendary.js');
const Medic = require('./Medics.js');

const Forrest = new Grunt("Forrest", "Earth");
const Rambo = new Grunt("Rambo", "Fighting");
const Chuck = new Legendary("Chuck Norris", "Ultimate");
const Albert = new Legendary("Albert", "Cosmic");
const Adam = new Medic("Adam", "Holy");
const Eve = new Medic("Eve", "Holy");


Chuck.attack(Albert);
Chuck.attack(Albert);
Chuck.attack(Albert);
Chuck.attack(Albert);
Chuck.OneHitKO(Albert);
Chuck.attack(Albert);
Chuck.OneHitKO(Albert);
Adam.Revive(Rambo);
Adam.Revive(Albert);
Albert.showStats();
