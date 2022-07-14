//functions accept any data type with arguments
function printData (data) {
    console.log(data); 
}
function printFunction (func) {

    console.log("Print callback function", func());
}

printData (1);
printData ('Text');

printFunction ( function () {
    return "\nHello, world!";
});