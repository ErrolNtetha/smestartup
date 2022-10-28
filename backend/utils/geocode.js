/* eslint-disable prefer-arrow-callback */
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEO_PROVIDER,
  httpAdapter: 'https',
  apiKey: process.env.MAPQUEST_API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);
// geocoder.geocode('Folweni Durban KwaZulu-Natal 4105', function (error, res) {
//    if (error) console.log(error);
//    console.log(res[0]);
// });

module.exports = geocoder;
