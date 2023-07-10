// NavBar Toggler
function toggleNav() {
  if (document.getElementById("side-navBar").style.width === "250px") {
    document.getElementById("side-navBar").style.width = "0";
    document.getElementById("main-container").style.transform = "translateX(0)";
  } else {
    document.getElementById("side-navBar").style.width = "250px";
    document.getElementById("main-container").style.transform =
      "translateX(250px)";
    document.getElementById("main-container").style.transition = "0.5s";
  }
}

// drop down function
var dropdown = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
// to remove scrollbar appearance
