const mongoose = require('mongoose');
const cities = require('./cities');
// const seedHelpers = require('./seedHelpers');
// const descriptors = seedHelpers.descriptors;
// const places = seedHelpers.places;
const {descriptors, places} = require('./seedhelpers');  //JS destructuring for the above 3 commented lines
// seedHelpers.js is exporting an object with two properties:
// descriptors → an array of strings
// places → another array of strings
const Campground = require('../models/campground'); 

mongoose.connect('mongodb://localhost:27017/yelp-camp-maptiler'); 

const db = mongoose.connection;
// Event listeners for connection states
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>  {
    console.log("Database connected");
})

const sample = array =>  array[Math.floor(Math.random() * array.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
        author: '6abb8c52f182174c8a2c003e',
        location: `${cities[random1000].city} , ${cities[random1000].state}`,
        title: `${sample(descriptors)} ${sample(places)}`,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium eius porro numquam et distinctio, voluptate fugiat labore incidunt, facere quis odio quod. Ullam eius harum blanditiis, beatae modi illo.",
        price: price,
        geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
        images: [
                {
                    url: 'https://res.cloudinary.com/rp0wvn4y/image/upload/v1790676674/YelpCamp/rztdasu2dljvbjvofg8p.jpg',
                    filename: 'YelpCamp/rztdasu2dljvbjvofg8p',

     
                },
                {
                    url: 'https://res.cloudinary.com/rp0wvn4y/image/upload/v1787410438/YelpCamp/jagrvv8gh7mitdvcw12h.png',
                    filename: 'YelpCamp/jagrvv8gh7mitdvcw12h',

     
                },
                {
                    url: 'https://res.cloudinary.com/rp0wvn4y/image/upload/v1787123160/YelpCamp/jlbknypl6da94moyn7vy.jpg',
                    filename: 'YelpCamp/jlbknypl6da94moyn7vy',
                }
            ]
    })
    await camp.save();
 }
}

seedDB().then(() => {
    mongoose.connection.close();
})