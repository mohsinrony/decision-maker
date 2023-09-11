document.addEventListener("DOMContentLoaded", function () {
    const userNameInput = document.getElementById("userName"); 
    const welcomeDisplay = document.getElementById("welcome");
    const questionInput = document.getElementById("question");
    const questionDisplay = document.getElementById("askedQuestion"); 
    const resultDisplay = document.getElementById("result"); 
    const submitButton = document.getElementById("enterName");
    const askButtonElement = document.getElementById("askButton");
    const stage1 = document.getElementById("stage1")
    const stage2 = document.getElementById("stage2")
    const stage3 = document.getElementById("stage3")
    const welcomeMessageDisplay = document.getElementById("welcomeMessage")

    submitButton.addEventListener("click", function () {
        const userName = userNameInput.value;
        if (userName !== "") {
          welcomeDisplay.textContent = `Hello, ${userName}!`;
          stage2.style.display = "block";
          stage1.style.display = "none";
          document.body.style.backgroundColor = "rgba(16, 249, 210, 1)";
          questionInput.focus();
        } else {
          welcomeDisplay.textContent = "Hello there!";
          stage2.style.display = "block";
          welcomeMessageDisplay.style.display = "block";
          document.getElementById("stage1").style.display = "none";
          document.body.style.backgroundColor = "rgba(249, 129, 16, 1)";
          questionInput.focus();
        }
      });
      askButtonElement.addEventListener("click", function () {
        if (questionInput.value !== ""){
        const question = questionInput.value;
        questionDisplay.textContent = `Your question was: "${question}"`;
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let result = "";
        switch (randomNumber) {
            case 1:
              result = "You know the answer!";
              break;
            case 2:
              result = "Ask ChatGPT";
              break;
            case 3:
              result = "Cannot predict now.";
              break;
            case 4:
              result = "No idea!";
              break;
            case 5:
              result = "Ask again later.";
              break;
            case 6:
              result = "Maybe, just Google it!";
              break;
            case 7:
              result = "Try again, later!";
              break;
            case 8:
              result = "Ask for Help";
              break;
            case 9:
              result = "I can't help you with that!";
              break;
            case 10:
              result = "No clue!";
              break;
            default:
              result = "Can you ask again?";
          }
          stage2.style.display = "none";
          stage3.style.display = "block";
          document.body.style.backgroundColor = "rgba(191, 238, 243, 1)";
          resultDisplay.textContent = `My suggestion is "${result}"`; 
        } else {
          welcomeMessageDisplay.style.display = "none";
          document.getElementById("errorMessage").style.display = "block";
          document.body.style.backgroundColor = "rgba(191, 238, 243, 1)";
        }
        });
      });
 