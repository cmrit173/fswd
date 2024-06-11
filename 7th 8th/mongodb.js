const mongoose = require("mongoose");

// Connect to MongoDB using Mongoose
mongoose.connect("mongodb://localhost:27017/hbs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.log("Failed to connect to MongoDB", err);
});

// Define a schema
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create a model
const collection = mongoose.model("collections1", loginSchema);

module.exports = collection;
