var http = require("http");

function keepAwake() {
    http.get("http://pickware-bartender.herokuapp.com");
    console.log("<kept from falling asleep>");
};