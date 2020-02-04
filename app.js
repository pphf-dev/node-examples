const rect = require('./rectangle');

function solveRect(l, w) {
    console.log (`\nSTART: Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) { //check to see if error has a value
            console.log('IF - ERROR:', err.message);
        } else {  //if null then okay to proceed
            console.log(`\nAFTER DELAY - ELSE: Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`AFTER DELAY - ELSE: Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('OUTSIDE IF...ELSE: This statement is logged after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
