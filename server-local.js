"use strict";

const app = require("./server");

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Local app listening on port ${port}!`));
