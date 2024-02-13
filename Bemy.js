document.getElementById("no-button").addEventListener("mouseover", function() {
  // Move the button away from the cursor
  let newX = Math.floor(Math.random() * window.innerWidth);
  let newY = Math.floor(Math.random() * window.innerHeight);
  document.getElementById("no-button").style.left = newX + "px";
  document.getElementById("no-button").style.top = newY + "px";
});

document.getElementById("yes-button").addEventListener("click", function() 
{
  // Changes the image source to the acceptance/happy GIF
  document.getElementById("cartoon-gif").src ="/gif/yes.gif";
  // Hides both buttons
  document.getElementById("yes-button").style.display = "none";
  document.getElementById("no-button").style.display = "none";
  // Changes the text content of the h1 element after clicking yes btn 
  document.querySelector("h1").textContent = "Yaaay !! Let's Meet Tomorrow 😊";
});






