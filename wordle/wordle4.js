// TO DO:
//  - addGuessRow()
//  - resetGuessRows()

// From Practice 7
// Just leave empty or
// Optional: import your updateKeyboardColor() implementation
function updateKeyboardColor(){
    // get each letter in the guess word
    document.querySelectorAll("th.guess").forEach((letter, i) => {
        // do yellows first:
        //  - letter is in the target word
        if (getTarget().includes(letter.innerHTML)){
            // find the correct key to color
            document.querySelectorAll("th.key").forEach((key) => {
                // match the key letter with the guess letter
                // also want to check if the key is not green
                if (letter.innerHTML == key.innerHTML && key.style.backgroundColor != "green"){
                    // color the key yellow
                    key.style.backgroundColor = "yellow";
                    return;
                }
            });
        }

        // do greens next:
        //  - the letter is the same position and text as target
        if (getTarget()[i] == letter.innerHTML){
            // find the correct key to color
            document.querySelectorAll("th.key").forEach((key) => {
                // match th ekey letter with the guess letter
                if (letter.innerHTML == key.innerHTML){
                    // color the key green
                    key.style.backgroundColor = "green";
                    return;
                }
            });
        }
    });
}

// From Practice 7
// Just leave empty or
// Optional: import your resetKeyboardColor() implementation
function resetKeyboardColor(){
    document.querySelectorAll("th.key").forEach((elem) => {
        elem.style.backgroundColor = "white";
    });
    return;
}

// Inserts a new row bewteen the target and the guess
// There is an empty table premade just for this with id="guessTable"

// The row must display the guessed word
// The cells must be colored correctly

// addGuessRow() runs after updateColor()
// meaning each of the th.guess cells are populated and colored correctly
// use this to your advantage

// Recommneded steps & hints:
//  - You'll be using document.createElement() six times:
//      - Once for the table row
//      - Five times for each table cell
//  - Make sure to set the innerHTML, className, and style.backgroundColor accordingly
//  - Make sure to element.appendChild()!
function addGuessRow(){
    
        const newRow = document.createElement("tr");
        newRow.className = "newGuessableRow";
        const guess = document.querySelectorAll("th.guess");

    guess.forEach((elem) => {

        const newTh = document.createElement("th");
        newTh.innerHTML = elem.innerHTML;
        newTh.className = "newGuessableCell";

        newTh.style.backgroundColor = elem.style.backgroundColor; 
            
        newRow.appendChild(newTh);

    });
    
    document.getElementById("guessTable").appendChild(newRow);


return;
}

// Removes every added guess row
// Recommneded steps & hints:
//  - You can setup your own class name during createElement()
//  - <table id="guessTable"> ensures a singular storage point for all your added rows
function resetGuessRows(){

        const tab = document.getElementById("guessTable");
        while(tab.firstChild){
            tab.removeChild(tab.firstChild);
        }
    return;
}

// ---------------- LIBRARY --------------------
// Do not make any edits in this section
// You may reference and use functions in this section
// ---------------- LIBRARY --------------------

// From Practice 5
// Optional: import your updateColor() implementation
function updateColor(){
    // get target
    const target = getTarget();
    
    // compare for each guess cell
    document.querySelectorAll("th.guess").forEach((elem, i) => {
        if (target.includes(elem.innerHTML)){
            elem.style.backgroundColor = "yellow";
        }
        if (target[i] == elem.innerHTML){
            elem.style.backgroundColor = "green";
        }
    });
}

// From Practice 6
// Sets keyboard functionality
// Optional: import your setKeys() implementation
let INDEX = 0;
let alph = "qwertyuiopasdfghjklzxcvbnm";
function setKeys(){
    document.querySelectorAll("th.key").forEach((elem) =>{
        elem.addEventListener("click", ()=>{
            if (INDEX < 5){
                document.querySelectorAll("th.guess")[INDEX++].innerHTML = elem.innerHTML.trim();
            }
        });
    });

    document.querySelectorAll("th.key").forEach((elem, i) =>{
            document.addEventListener("keydown", (event) =>{
            if (event.key == alph[i]){
                if (INDEX < 5){
                    document.querySelectorAll("th.guess")[INDEX++].innerHTML = elem.innerHTML.trim();
                }
            }
        });
    });
}

// Reset Button Functionality
function resetClick(){
    INDEX = 0;
    setTarget(randomWord());
    document.querySelectorAll("th.guess").forEach((elem) => {
        elem.style.backgroundColor = "white";
        elem.innerHTML = "X";
    })

    resetKeyboardColor();
    resetGuessRows();
    
    // reconnect guess button
    document.getElementById("guessBtn").addEventListener("click", guessClick);
}

// Clears guess back to XXXXX and white background
function resetGuess(){
    document.querySelectorAll("th.guess").forEach((elem) => {
        elem.style.backgroundColor = "white";
        elem.innerHTML = "X";
    })
    INDEX = 0;
}

// Word bank
const bank = ["About", "Alert", "Argue", "Beach", "Above", "Alike", "Arise", "Began", "Abuse", "Alive", "Array", "Begin", "Actor", "Allow", "Aside", "Begun", "Acute", "Alone", "Asset", "Being", "Admit", "Along", "Audio", "Below", "Adopt", "Alter", "Audit", "Bench", "Adult", "Among", "Avoid", "Billy", "After", "Anger", "Award", "Birth", "Again", "Angle", "Aware", "Black", "Agent", "Angry", "Badly", "Blame", "Agree", "Apart", "Baker", "Blind", "Ahead", "Apple", "Bases", "Block", "Alarm", "Apply", "Basic", "Blood", "Album", "Arena", "Basis", "Board", "Boost", "Buyer", "China", "Cover", "Booth", "Cable", "Chose", "Craft", "Bound", "Calif", "Civil", "Crash", "Brain", "Carry", "Claim", "Cream", "Brand", "Catch", "Class", "Crime", "Bread", "Cause", "Clean", "Cross", "Break", "Chain", "Clear", "Crowd", "Breed", "Chair", "Click", "Crown", "Brief", "Chart", "Clock", "Curve", "Bring", "Chase", "Close", "Cycle", "Broad", "Cheap", "Coach", "Daily", "Broke", "Check", "Coast", "Dance", "Brown", "Chest", "Could", "Dated", "Build", "Chief", "Count", "Dealt", "Built", "Child", "Court", "Death", "Debut", "Entry", "Forth", "Group", "Delay", "Equal", "Forty", "Grown", "Depth", "Error", "Forum", "Guard", "Doing", "Event", "Found", "Guess", "Doubt", "Every", "Frame", "Guest", "Dozen", "Exact", "Frank", "Guide", "Draft", "Exist", "Fraud", "Happy", "Drama", "Extra", "Fresh", "Harry", "Drawn", "Faith", "Front", "Heart", "Dream", "False", "Fruit", "Heavy", "Dress", "Fault", "Fully", "Hence", "Drill", "Fiber", "Funny", "HenewRoy", "Drink", "Field", "Giant", "Horse", "Drive", "Fifth", "Given", "Hotel", "Drove", "Fifty", "Glass", "House", "Dying", "Fight", "Globe", "Human", "Eager", "Final", "Going", "Ideal", "Early", "First", "Grace", "Image", "Earth", "Fixed", "Grade", "Index", "Eight", "Flash", "Grand", "Inner", "Elite", "Fleet", "Grant", "Input", "Empty", "Floor", "Grass", "Issue", "Enemy", "Fluid", "Great", "Irony", "Enjoy", "Focus", "Green", "Juice", "Enter", "Force", "Gross", "Joint", "Jones", "Links", "Media", "Newly", "Judge", "Lives", "Metal", "Night", "Known", "Local", "Might", "Noise", "Label", "Logic", "Minor", "North", "Large", "Loose", "Minus", "Noted", "Laser", "Lower", "Mixed", "Novel", "Later", "Lucky", "Model", "Nurse", "Laugh", "Lunch", "Money", "Occur", "Layer", "Lying", "Month", "Ocean", "Learn", "Magic", "Moral", "Offer", "Lease", "Major", "Motor", "Often", "Least", "Maker", "Mount", "Order", "Leave", "March", "Mouse", "Other", "Legal", "Maria", "Mouth", "Ought", "Level", "Match", "Movie", "Paint", "Lewis", "Maybe", "Music", "Panel", "Light", "Mayor", "Needs", "Paper", "Limit", "Meant", "Never", "Party", "Peace", "Power", "Radio", "Round", "Peter", "Press", "Raise", "Route", "Phase", "Price", "Range", "Royal", "Phone", "Pride", "Rapid", "Rural", "Photo", "Prime", "Ratio", "Scale", "Piece", "Print", "Reach", "Scene", "Pilot", "Prior", "Ready", "Scope", "Pitch", "Prize", "Refer", "Score", "Place", "Proof", "Right", "Sense", "Plain", "Proud", "Rival", "Serve", "Plane", "Prove", "River", "Seven", "Plant", "Queen", "Robin", "Shall", "Plate", "Quick", "Roger", "Shape", "Point", "Quiet", "Roman", "Share", "Pound", "Quite", "Rough", "Sharp", "Sheet", "Spare", "Style", "Times", "Shelf", "Speak", "Sugar", "Tired", "Shell", "Speed", "Suite", "Title", "Shift", "Spend", "Super", "Today", "Shirt", "Spent", "Sweet", "Topic", "Shock", "Split", "Table", "Total", "Shoot", "Spoke", "Taken", "Touch", "Short", "Sport", "Taste", "Tough", "Shown", "Staff", "Taxes", "Tower", "Sight", "Stage", "Teach", "Track", "Since", "Stake", "Teeth", "Trade", "Sixth", "Stand", "Terry", "Train", "Sixty", "Start", "Texas", "Treat", "Sized", "State", "Thank", "Trend", "Skill", "Steam", "Theft", "Trial", "Sleep", "Steel", "Their", "Tried", "Slide", "Stick", "Theme", "Tries", "Small", "Still", "There", "Truck", "Smart", "Stock", "These", "Truly", "Smile", "Stone", "Thick", "Trust", "Smith", "Stood", "Thing", "Truth", "Smoke", "Store", "Think", "Twice", "Solid", "Storm", "Third", "Under", "Solve", "Story", "Those", "Undue", "Sorry", "Strip", "Three", "Union", "Sound", "Stuck", "Threw", "Unity", "South", "Study", "Throw", "Until", "Space", "Stuff", "Tight", "Upper", "Upset", "Whole", "Waste", "Wound", "Urban", "Whose", "Watch", "Write", "Usage", "Woman", "Water", "Wrong", "Usual", "Women", "Wheel", "Wrote", "Valid", "World", "Where", "Yield", "Value", "Worry", "Which", "Young", "Video", "Worse", "While", "Youth", "Virus", "Worst", "White", "Worth", "Visit", "Would", "Vital", "Voice"];

// Returns a random word from the wordbank
function randomWord(){
    return bank[Math.floor(Math.random()*bank.length)].toUpperCase();
}

// Sets the guess table row text to guessString
function setGuess(guessWord){
    document.querySelectorAll("th.guess").forEach((elem, i) => {elem.innerHTML = guessWord[i];});
}

// Sets the target table row text to targetString
function setTarget(target){
    document.querySelectorAll("th.target").forEach((elem, i) => {elem.innerHTML = target[i]});
}

// Returns current text in guess table row (string)
function getGuess(){
    guess = "";
    document.querySelectorAll("th.guess").forEach((elem) => {guess += elem.innerHTML});
    return guess;
}

// Returns current text in target table row (string)
function getTarget(){
    target = "";
    document.querySelectorAll("th.target").forEach((elem) => {target += elem.innerHTML;});
    return target;
}

// Checks win condition
function checkWin(){
    if (getGuess() == getTarget()){
        setTimeout(function(){
            alert("You got the word!");
        }, 100);
        document.getElementById("guessBtn").removeEventListener("click", guessClick);
    }
}

// Create keyboard dynamically
function createKeyboard(){
    const TOP = 10;
    const MID = 9;
    const BOT = 7;

    const topRow = document.createElement("tr");
    for (let i = 0; i < TOP; ++i){
        const cell = document.createElement("th");
        cell.className = "key";
        cell.innerHTML = alph[i].toUpperCase();
        topRow.appendChild(cell);
    }
    document.getElementById("topTab").appendChild(topRow);

    const midRow = document.createElement("tr");
    for (let i = TOP; i < TOP + MID; ++i){
        const cell = document.createElement("th");
        cell.className = "key";
        cell.innerHTML = alph[i].toUpperCase();
        midRow.appendChild(cell);
    }
    document.getElementById("midTab").appendChild(midRow);


    const botRow = document.createElement("tr");
    for (let i = TOP + MID; i < TOP + MID + BOT; ++i){
        const cell = document.createElement("th");
        cell.className = "key";
        cell.innerHTML = alph[i].toUpperCase();
        botRow.appendChild(cell);
    }
    document.getElementById("botTab").appendChild(botRow);
}

// Checks win condition
function checkWin(){
    if (getGuess() == getTarget()){
        setTimeout(function(){
            alert("You got the word!");
        }, 100);
        document.getElementById("guessBtn").removeEventListener("click", guessClick);
    }
    else{
        addGuessRow();
        resetGuess();
    }
}

function guessClick(){
    // set word, update color, check win condition
    updateColor();

    // must happen after new word is loaded
    updateKeyboardColor();

    // Check win condition
    checkWin();

}

function init(){
    // connect buttons
    document.getElementById("guessBtn").addEventListener("click", guessClick);
    document.getElementById("resetBtn").addEventListener("click", resetClick);

    // load word
    setTarget(randomWord())

    // create keyboard
    createKeyboard();

    // set key functionality
    setKeys();

    // set enter functionality
    document.addEventListener("keydown", (event) =>{
        if (event.key == "Enter"){
            guessClick();
        }
    });
}

init();
