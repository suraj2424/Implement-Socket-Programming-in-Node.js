const { WebSocketServer } = require("ws");
const express = require("express");

const port = 8080;

const app = express();

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) =>{
        console.log("data from client: %s", data);
        ws.send("thank you!");
    })
});