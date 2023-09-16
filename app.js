const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grids div");
const logLeft = document.querySelectorAll(".log-left");
const logRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".cars-left");
const carsRight = document.querySelectorAll(".cars-right");
let currentIndex = 76;
const width = 9;
let timerId;
let currentTime = 60
let outcomeTimerId 

squares[currentIndex].style.backgroundColor = "green";
squares[currentIndex].classList.add("frog");
function moveFrog(e) {
  squares[currentIndex].style.backgroundColor = "";
  squares[currentIndex].classList.remove("frog");
  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      if (currentIndex % width != 0) {
        currentIndex -= 1;
      }

      break;
    case "ArrowRight":
      console.log("move right");
      if (currentIndex % width < width - 1) {
        currentIndex += 1;
      }
      break;
    case "ArrowUp":
      console.log("move up");
      if (currentIndex - width >= 0) {
        currentIndex -= width;
      }
      break;
    case "ArrowDown":
      console.log("move Down");
      if (currentIndex + width < width * width) {
        currentIndex += width;
      }
  }
  squares[currentIndex].style.backgroundColor = "green";
  squares[currentIndex].classList.add("frog");
}


function autoMoveElements() {
  currentTime--
  timeLeftDisplay.innerHTML = currentTime
  logLeft.forEach((logLeft) => {
    moveLogLeft(logLeft);
  });

  logRight.forEach((logRight) => {
    moveLogRight(logRight);
  });

  carsLeft.forEach((carLeft) => {
    moveCarLeft(carLeft);
  });

  carsRight.forEach((carRight) => {
    moveCarRight(carRight);
  });
}

function checkOutComes(){
  lose();
  win();
}

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.remove("bg-red-950");
      logLeft.classList.add("l2");
      logLeft.classList.add("bg-red-950");
      break;
    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.remove("bg-red-950");
      logLeft.classList.add("l3");
      logLeft.classList.add("bg-red-950");
      break;
    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.remove("bg-red-950");
      logLeft.classList.add("l4");
      logLeft.classList.add("bg-blue-300");
      break;
    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.remove("bg-blue-300");
      logLeft.classList.add("l5");
      logLeft.classList.add("bg-blue-300");
      break;
    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.remove("bg-blue-500");
      logLeft.classList.add("l1");
      logLeft.classList.add("bg-red-950");
  }
}

function moveLogRight(logRight) {
  switch (true) {
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.remove("bg-red-950");
      logRight.classList.add("l5");
      logRight.classList.add("bg-blue-300");
      break;
    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.remove("bg-red-950");
      logRight.classList.add("l1");
      logRight.classList.add("bg-red-950");
      break;
    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.remove("bg-red-950");
      logRight.classList.add("l2");
      logRight.classList.add("bg-red-950");
      break;
    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.remove("bg-blue-300");
      logRight.classList.add("l3");
      logRight.classList.add("bg-red-950");
      break;
    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.remove("bg-blue-300");
      logRight.classList.add("l4");
      logRight.classList.add("bg-blue-300");
  }
}

function moveCarLeft(carLeft) {
  switch (true) {
    case carLeft.classList.contains("c1"):
      carLeft.classList.remove("c1");
      carLeft.classList.remove("bg-black");
      carLeft.classList.add("c2");
      carLeft.classList.add("bg-gray-300");
      break;
    case carLeft.classList.contains("c2"):
      carLeft.classList.remove("c2");
      carLeft.classList.remove("bg-gray-300");
      carLeft.classList.add("c3");
      carLeft.classList.add("bg-gray-300");
      break;
    case carLeft.classList.contains("c3"):
      carLeft.classList.remove("c3");
      carLeft.classList.remove("bg-gray-300");
      carLeft.classList.add("c1");
      carLeft.classList.add("bg-black");
      break;
  }
}

function moveCarRight(carRight) {
  switch (true) {
    case carRight.classList.contains("c1"):
      carRight.classList.remove("c1");
      carRight.classList.remove("bg-black");
      carRight.classList.add("c3");
      carRight.classList.add("bg-gray-300");
      break;
    case carRight.classList.contains("c2"):
      carRight.classList.remove("c2");
      carRight.classList.remove("bg-gray-300");
      carRight.classList.add("c1");
      carRight.classList.add("bg-black");
      break;
    case carRight.classList.contains("c3"):
      carRight.classList.remove("c3");
      carRight.classList.remove("bg-gray-300");
      carRight.classList.add("c2");
      carRight.classList.add("bg-gray-300");
      break;
  }
}

function lose() {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5") ||
    currentTime <= 0
  ) {
    resultDisplay.innerHTML = "You Lose";
    clearInterval(timerId);
    clearInterval(outcomeTimerId)
    squares[currentIndex].classList.remove("frog");
    squares[currentIndex].style.backgroundColor = "";
    document.removeEventListener("keyup", moveFrog);
  }
}

function win(){
  if (squares[currentIndex].classList.contains('ending-block')) {
    resultDisplay.innerHTML = "You Win";
    clearInterval(timerId);
    clearInterval(outcomeTimerId)
    document.removeEventListener("keyup", moveFrog);
  }
}

startPauseButton.addEventListener('click', () => {
  if(timerId){
    clearInterval(timerId)
    clearInterval(outcomeTimerId)
    outcomeTimerId = null
    timerId = null
    document.removeEventListener("keyup", moveFrog);
  }
  else{
    timerId = setInterval(autoMoveElements, 1000);
    outcomeTimerId = setInterval(checkOutComes,50)
    document.addEventListener("keyup", moveFrog);
  }
})
