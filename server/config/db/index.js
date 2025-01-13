const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connected db sucessfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };