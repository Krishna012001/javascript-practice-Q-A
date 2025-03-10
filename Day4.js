// Qs1. Try out the following events in Event Listener on your own :- mouseout- keypress- Scroll- load
// [Use MDN for help]

const scrollStatus = document.querySelector('div');

// Add the scroll event listener to the window
window.addEventListener('scroll', function () {
  // Get the current scroll position
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Update the text content of the scrollStatus element
  scrollStatus.textContent = `Scroll Position: ${scrollPosition}`;
});


// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

let button = document.createElement("button")
button.innerText = "submit"
let body = document.querySelector("body")
body.append(button)
button.addEventListener("click", function () {
  button.style.backgroundColor = "blue"
})


button.onclick = function () {
  button.style.backgroundColor = "green"

}




// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading

let input = document.querySelector("#name")
input.addEventListener("input", function () {

  let h2 = document.querySelector("h2")



  h2.innerText = input.value.replace(/[^a-zA-Z\s]/g, '')

})