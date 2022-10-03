let fields: string[] = [];
let gameOver: boolean = false;
let currentShape: string = "cross";

function fillShape(id: number) {
   if (!fields[id] && !gameOver) {
      if (currentShape == "cross") {
         currentShape = "circle";
         document.getElementById("player2")?.classList.remove("opacity-50");
         document.getElementById("player1")?.classList.add("opacity-50");
      } else {
         currentShape = "cross";
         document.getElementById("player2")?.classList.add("opacity-50");
         document.getElementById("player1")?.classList.remove("opacity-50");
      }

      fields[id] = currentShape;
      console.log(fields);
      draw();
      checkForWin();
   }
}

function draw() {
   for (let i = 0; i < fields.length; i++) {
      if (fields[i] == "circle") {
         document.getElementById("circle-" + i)?.classList.remove("hidden");
      }

      if (fields[i] == "cross") {
         document.getElementById("cross-" + i)?.classList.remove("hidden");
      }
   }
}

function checkForWin() {
   let winner: string;

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
