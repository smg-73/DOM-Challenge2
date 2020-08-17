// 1. BUTTONS EXERCISE

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button1Text = document.querySelector(".text1");
const button2Text = document.querySelector(".text2");

button1.onclick = function () {
  button1Text.innerText = "I'm right!";
};

button2.onclick = function () {
  button2Text.innerText = "No, I'm right!";
};

// 2. HOVER OVER EXERCISE

const hoverElement = document.querySelector(".hover");

function mouseHovered() {
  alert("Hey, I told you not to hover over me!");
}

hoverElement.addEventListener("mouseover", mouseHovered);

// 4. Password is correct

//

const formHeader1 = document.getElementById("formHeader");
const submitButton = document.getElementById("submit");
const userpassword = document.getElementsByName("password");

function correct() {
  formHeader1.innerText = "You Are Now Logged-on";
}

function incorrect() {
  alert("Incorrect Password. Please Try Again");
}

function passwordCheck() {
  let userPassword = password.value;
  if (userPassword === "12345678") {
    correct();
  } else {
    incorrect();
  }
}
submitButton.addEventListener("click", passwordCheck);
