const Unicycle = require('./Unicycle.js');
const Bicycle = require('./Tricycle.js');
const Shop = require('./Shop.js');

var embarrassment = new Unicycle("pink", "flaming pleather");
embarrassment.ride();

var NotBikeShope = new Shop();
NotBikeShope.rideAll();

var MikeBike = new Bicycle(2,"orange");
MikeBike.ride();