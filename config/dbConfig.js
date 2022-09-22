const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("connection to mongo is successful");
});

connection.on("error", (error) => {
    console.log("connection to mongo has error", error);
});


module.exports =mongoose;