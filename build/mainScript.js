"use strict";
let fields = [];
let gameOver = false;
let currentShape = "cross";
function fillShape(id) {
    var _a, _b, _c, _d;
    if (!fields[id] && !gameOver) {
        if (currentShape == "cross") {
            currentShape = "circle";
            (_a = document.getElementById("player2")) === null || _a === void 0 ? void 0 : _a.classList.remove("opacity-50");
            (_b = document.getElementById("player1")) === null || _b === void 0 ? void 0 : _b.classList.add("opacity-50");
        }
        else {
            currentShape = "cross";
            (_c = document.getElementById("player2")) === null || _c === void 0 ? void 0 : _c.classList.add("opacity-50");
            (_d = document.getElementById("player1")) === null || _d === void 0 ? void 0 : _d.classList.remove("opacity-50");
        }
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
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
        let line0 = document.getElementById("line-0");
        if (line0 != null) {
            line0.style.transform = "scale(1)";
        }
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        winnerIsOnDisplay();
        let line1 = document.getElementById("line-1");
        if (line1 != null) {
            line1.style.transform = "scale(1)";
        }
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        winnerIsOnDisplay();
        let line2 = document.getElementById("line-2");
        if (line2 != null) {
            line2.style.transform = "scale(1)";
        }
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        winnerIsOnDisplay();
        let row0 = document.getElementById("line-4");
        if (row0 != null) {
            row0.style.transform = "scale(1) rotate(90deg)";
        }
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        winnerIsOnDisplay();
        let row1 = document.getElementById("line-3");
        if (row1 != null) {
            row1.style.transform = "scale(1) rotate(90deg)";
        }
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        winnerIsOnDisplay();
        let row2 = document.getElementById("line-5");
        if (row2 != null) {
            row2.style.transform = "scale(1) rotate(90deg)";
        }
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        winnerIsOnDisplay();
        let diag0 = document.getElementById("line-6");
        if (diag0 != null) {
            diag0.style.transform = " rotate(45deg) scaleX(1.0)";
        }
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        winnerIsOnDisplay();
        let diag1 = document.getElementById("line-7");
        if (diag1 != null) {
            diag1.style.transform = " rotate(-45deg) scaleX(1.0)";
        }
    }
    function winnerIsOnDisplay() {
        console.log("Gewonnen hat " + winner);
        gameOver = true;
        let gameOverImage = document.getElementById("image-game-over");
        setTimeout(function () {
            if (gameOverImage != null) {
                gameOverImage.classList.remove("hidden");
            }
        }, 750);
    }
}
