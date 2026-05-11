const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());


// ======================
// MONGODB CONNECT
// ======================

mongoose.connect(
    "mongodb://DeepakBhai1:Akashya12@ac-srheovm-shard-00-00.n73gk0u.mongodb.net:27017,ac-srheovm-shard-00-01.n73gk0u.mongodb.net:27017,ac-srheovm-shard-00-02.n73gk0u.mongodb.net:27017/contect?ssl=true&replicaSet=atlas-w9rfv9-shard-0&authSource=admin&appName=Cluster0"
)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


// ======================
// DIRECT SCHEMA
// ======================

const Contact = mongoose.model(
    "Contact",
    new mongoose.Schema({
        userType: String,
        name: String,
        email: String,
        phone: String,
        message: String,
        createdAt: {
            type: Date,
            default: Date.now,
        },
    })
);


// ======================
// CONTACT API
// ======================

app.post("/contact", async (req, res) => {

    try {

        const { userType, name, email, phone, message } = req.body;

        // SAVE DATABASE

        Contact.create({
            userType,
            name,
            email,
            phone,
            message,
        });


        // ======================
        // EMAIL SEND
        // ======================

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {
                user: "nandeshwar7678@gmail.com",
                pass: "eqlazzhzcbuwwsws",
            },
        });


        transporter.sendMail({

            from: "nandeshwar7678@gmail.com",

            to: "nandeshwar7678@gmail.com",

            subject: "New Contact Message",

            html: `
        <h2>New Contact Message</h2>

        <p><b>User Type:</b> ${userType}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        });


        res.json({
            success: true,
            message: "Message Sent Successfully",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
});




// ======================
// START SERVER
// ======================

app.listen(5000, () => {
    console.log("Server Running on 5000");
});