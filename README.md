# 5 Day Forecast

Enter you're zip code, and get weather predictions for the next five days

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  <!-- - [Useful resources](#useful-resources) -->
- [Author](#author)
<!-- - [Acknowledgments](#acknowledgments) -->


## Overview

### The challenge

Users should be able to:

- Enter a zip code into the search field to load weather data for the next five days for that location
- Select one of the days to see more specific weather details
- See a different background image depending on the day's weather

### Screenshot

![](./screenshots/screenshot.jpg)

### Links

- Live Site URL: [https://5-day-forecast.netlify.app/](https://5-day-forecast.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS Flex and Grid
- [React](https://reactjs.org/) - JS library
- [Axios] (https://axios-http.com/) - HTTP client
- [react-spring] (https://www.react-spring.io/) - Animation library
- [Open Weather Map] (https://openweathermap.org/) - Weather forecast API

### What I learned

This project was an excercise in parsing large amounts of JSON data.  For example, wind directionality had to be converted frm radians to compass point directions:
```js
directionConvert = (dir) => {
    if (dir >= 348.75 || dir <= 11.25) {
        return 'N';
    } else if (dir <= 33.75) {
        return 'NNE';
    } else if (dir <= 56.25) {
        return 'NE';
    } else if (dir <= 78.75) {
        return 'ENE';
    } else if (dir <= 101.25) {
        return 'E';
    } else if (dir <= 123.75) {
        return 'ESE';
    } else if (dir <= 146.25) {
        return 'SE';
    } else if (dir <= 168.75) {
        return 'SSE';
    } else if (dir <= 191.25) {
        return 'S';
    } else if (dir <= 213.75) {
        return 'SSW';
    } else if (dir <= 236.25) {
        return 'SW';
    } else if (dir <= 258.75) {
        return 'WSW';
    } else if (dir <= 281.25) {
        return 'W';
    } else if (dir <= 303.75) {
        return 'WNW';
    } else if (dir <= 326.25) {
        return 'NW';
    } else if (dir < 348.75) {
        return 'NNW';
    }
}
```


### Continued development

Ways to improve this app include
- Validating input
- Allowing for search by more than just zip code
    - City, State, Country
    - GPS location


## Author

- [Michael Weber](https://michaelweber.dev/)
- [LinkedIn](https://www.linkedin.com/in/michaelscottweber/)

