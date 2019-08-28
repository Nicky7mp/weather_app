const {Router} = require('express');
const router = Router();

const getWeather = require('../lib/getWeather')

// function showWeather() {
//     let x = document.getElementById("displayWeather");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

router.get('/', async(req, res) => {
    res.render('index');
});

router.post('/', async(req, res) => {
    let location = req.body.location;
    let country = req.body.country;
    // console.log(location, country);

    let data = await getWeather(location, country);
    // console.log(data);

    if (data.list[0] !== undefined) {
        let description = data.list[0].weather[0].description;
        let temp = data.list[0].main.temp;
        let humidity = data.list[0].main.humidity;
        let wind = data.list[0].wind.speed;

        res.render('index', {data: {location, country, description, temp, humidity, wind}});
    } else {

        res.render('index', {data: {location, country, description, temp, humidity, wind}});
        console.log("there ain't none")
    }
});

module.exports = router;