function toggleDarkMode() {
  let darkModeText = document.getElementById("darkmodetext");

  if (document.getElementById("DarkModeSwitch").checked) {
    darkModeText.innerHTML = "Dark Mode";
  } else {
    darkModeText.innerHTML = "Light Mode";
  }
}

function toggleGradiant() {
  document.getElementById(
    "my_header"
  ).style.backgroundImage = `linear-gradient(to right, rgba(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, 0.75), rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, 0.75)) ,url('src/stock.webp')`;
}
