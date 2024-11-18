function toggleMenu() {
    var x = document.getElementById("navbarResponsive");
    if (x.style.display === "flex") {
        x.style.display = "none";
        document.getElementById("menu-button").classList.toggle("bx-x");
        document.getElementById("navbar-toggler").style.backgroundColor = "#009bdd";
        document.getElementById("navbar-toggler").style.color = "#fff";
    } else {
        x.style.display = "flex";
        document.getElementById("menu-button").classList.toggle("bx-x");
        document.getElementById("navbar-toggler").style.backgroundColor = "#ff009d55";
        document.getElementById("navbar-toggler").style.color = "#000";
    }
}

function parallax() {
    if (document.getElementById("parallax")) {
      var img = document.getElementsByClassName("parrallax-img");
    for (var i = 0; i < img.length; i++) {
        img[i].style.transform = "translateY(" + window.scrollY * 0.2 * -i + "px)";
    console.log(i);
    }
    }
}
window.addEventListener("scroll", parallax);


function scrollDown() {
    // smooth scroll on page
    window.scrollTo({
        top: document.getElementById("block-container").offsetHeight - 100,
        behavior: "smooth"
    });
}