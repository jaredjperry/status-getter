"use strict";

const ghStatus = require("github-status");

ghStatus().then(obj => {
    console.log(obj);
}).catch(err => {
    console.log(err);
});
