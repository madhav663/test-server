import express from "express";
import "dotenv/config";

const app = express();



app.listen(80, (err) => {
    if (err) {
        console.log('Unable to start server ERROR: ', err)
    }
    console.log('Server Listening')
})


app.get('/', (req, res) => {
    res.status(200).json({
        SERVER_TYPE: "TEST_SERVER",
        LAPTOP: "MADHAV MISHRA",
        HOST:"43.204.18.194",
        PORT: '80',
        TEST_SERVER_URL: "http://43.204.18.194",
        APILABS_URL: "http://169.254.63.49:3000"
    })
})

let request_count = 0;

app.get('/test', (req, res) => {
    console.log(request_count, "Request Received")
    request_count++;
    res.status(200).end();
})