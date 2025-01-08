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


function addBook(x) {
    // smooth scroll on page
    if (localStorage.getItem("addBook") == null) {
        let addBook = [];
        addBook.push(x);
        localStorage.setItem("addBook", JSON.stringify(addBook));

    } else {
        let addBook = JSON.parse(localStorage.getItem("addBook"));
        addBook.push(x);
        // remove duplicates
        addBook = [...new Set(addBook)];
        localStorage.setItem("addBook", JSON.stringify(addBook));
    }
 checkBook();
}

function checkBook() {
    if (localStorage.getItem("addBook") == null) {
        document.getElementById("addBook").style.display = "none";
        return false;
    } else {
        document.getElementById("addBook").style.display = "block";
    }
}

checkBook();

function sendBooks() {
    // smooth scroll on page
    let modal = document.createElement("div");
    modal.classList.add("modal");
    let books = JSON.parse(localStorage.getItem("addBook"));
    let iframe = document.createElement("iframe");
    iframe.name = "hiddenFrame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    modal.innerHTML = `
    <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Vielen Dank</h2>
    <p>Wollen Sie mehr Informationen über folgende Publikationen erhalten?</p>
    <ol><b>
    ${books.map(book => `<li>${book}</li>`).join("")}
        </b></ol> 
    <form action="https://auto.staneks.de/webhook/5a062cd0-12c0-4295-8984-71cce81cd818" method="POST" target="hiddenFrame" onsubmit="setTimeout(function(){document.getElementsByClassName('modal')[0].remove();localStorage.removeItem('addBook');checkBook();sentBooks();}, 1500);">
    <input id="mail" name="mail" type="email" placeholder="Ihre E-Mailadresse" required>
    <input id="books" name="books" type="hidden" value="${books}" required>
    <input type="submit" value="Ja" >
    <input type="button" value="Nein" onclick="document.querySelector('.modal').remove();localStorage.removeItem('addBook');checkBook()">
    </form>
    </div>
    `;
    modal.style.display = "block";
    document.body.appendChild(modal);
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.remove();
    }
}


function sentBooks() {
    // smooth scroll on page
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
    <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Nachricht gesendet</h2>
    <p>Vielen Dank für Ihre Nachricht!</p>
    </div>
    `;
    modal.style.display = "block";
    document.body.appendChild(modal);
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.remove();
    }
}