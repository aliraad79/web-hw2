function toggleDarkMode() {
  let darkModeText = document.getElementById("darkmodetext");

  if (document.getElementById("DarkModeSwitch").checked) {
    darkModeText.innerHTML = "Dark Mode";
  } else {
    darkModeText.innerHTML = "Light Mode";
  }
}
