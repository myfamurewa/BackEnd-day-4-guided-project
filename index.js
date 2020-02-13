const express = require("express");

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    const heroes = [{ id: 1, name: "All Might"}];

    res.status(200).json(heroes)
});

const port = 3000

server.listen(port, () => console.log(`/n ** Running on port ${port} ** /n`))