const express = rquire("express");
const cors = require("cors")

const app = express();
app.use(cors());

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

app.get("/", (req, res) => {
    res.json({ "status": "alive" })
})
