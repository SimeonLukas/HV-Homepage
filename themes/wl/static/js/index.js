function toggleMenu() {
    var x = document.getElementById("navbarResponsive");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function parallax() {
    if (document.getElementById("parallax")) {
      var img = document.getElementsByTagName("img");
    for (var i = 0; i < img.length; i++) {
        img[i].style.transform = "translateY(" + window.scrollY * 0.2 * -i + "px)";
    console.log(i);
    }
    }
}
window.addEventListener("scroll", parallax);