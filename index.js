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

function registerClicked() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function popupClicked() {
  var popup = document.getElementById("myPopup");
  if (popup.innerHTML == "با موفقیت انجام شد") {
    popup.innerHTML = "آیا مطمعن هستید؟";
  } else {
    popup.innerHTML = "با موفقیت انجام شد";
    popup.classList.toggle("show");
  }
}
