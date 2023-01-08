

// Gettings results of inputs for the value of the numbers A and B, and declaring variable "result" to use it later. 
var numberA = () => parseInt(document.getElementById("input-numberA").value);
var numberB = () => parseInt(document.getElementById("input-numberB").value);
var result;

// Getting result to be printed on the document as a total of the math operation. For printing "error" with the result "NaN", I tryed several posible options, but the only way I found that it works it was the application of the function "isNaN()". On the other hand, the division of any number by zero gives the result "Infinity", which it is not mathematically correct, so I specify also to print "error" in those cases. 
var getResult = () => {
    var print;
    if (isNaN(result) || result == "Infinity") {
        print = "Error";
    } else 
        print = result;
    document.getElementById("result").innerText = print;
}

// Function to realise the math operation depending on the id of the button clicked. This function calls to the "getResult" function to printed the result. It has a "default" to indicate that if the id of the click action does not match with any id of the four buttons, the function ends (I've used a "return" for that purpose). 
var mathOperation = (click) => {
    switch (click.target) {
        case sumButton: 
        result = numberA() + numberB();
        break;
        case restButton:
        result = numberA() - numberB();
        break;
        case multiplicationButton:
        result = numberA() * numberB();
        break;
        case divisionButton: 
        result = numberA() / numberB();
        break;
        default: 
        return
    }
    getResult(); 
};

// Function for adding an event listener to the event of "click" in the created area for the buttons (this is a "div" with the id "buttons"). By this way, I do not have to specify the event as a click in each one of the four buttons (sum, rest, multiply and divide). Finally, I call the function "eventButtonsClicked", which calls the function "mathOperation".
var eventButtonsClicked = () => document.getElementById("buttons").addEventListener("click", mathOperation);
eventButtonsClicked();

