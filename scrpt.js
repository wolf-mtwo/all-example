#!/usr/bin/env node

console.log("=================Super Number Cruncher 5000=================");
console.log("--Running important simulations for your thesis since now!--");

var i = 0;
setInterval(function() {
    if (Math.random() < 0.05) {
        throw Error('FLAGRANT ERROR');
    } else {
        //Generate some output data
        console.log((i++)+','+(273.15+60*Math.random()));
    }
}, 500);
