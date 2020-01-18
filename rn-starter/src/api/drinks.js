import axios from 'axios';

export default axios.create({
  // baseURL: 'https://api.yelp.com/v3/businesses',
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
  headers: {
    Authorization:
      'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
  }
});

//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
//https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
