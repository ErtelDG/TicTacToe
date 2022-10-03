"use strict";
let fields = [];
let currentShape = "cross";
function fillShape(id) {
    if (currentShape == "cross") {
        currentShape = "circle";
    }
    else {
        currentShape = "cross";
    }
    fields[id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
}
function draw() {
    var _a, _b;
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == "circle") {
            (_a = document.getElementById("circle-" + i)) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
        }
        if (fields[i] == "cross") {
            (_b = document.getElementById("cross-" + i)) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
        }
    }
}
function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        winnerIsOnDisplay();
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        winnerIsOnDisplay();
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        winnerIsOnDisplay();
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        winnerIsOnDisplay();
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        winnerIsOnDisplay();
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        winnerIsOnDisplay();
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        winnerIsOnDisplay();
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        winnerIsOnDisplay();
    }
    function winnerIsOnDisplay() {
        console.log("Gewonnen hat " + winner);
    }
}
