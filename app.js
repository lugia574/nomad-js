const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.classList.toggle("clicked");
}

title.addEventListener("click", handleTitleClick);

let a = parseInt("2");
console.log(typeof a);
