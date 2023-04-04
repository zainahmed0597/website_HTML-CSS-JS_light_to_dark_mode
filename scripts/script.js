let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let logo = document.getElementById("logo");

btn.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btnIcon.src = "assets/images/sun.png";
        btnText.innerHTML = "Light";
        logo.src = "assets/images/logo-white.png";
    } else {
        btnIcon.src = "assets/images/moon.png";
        btnText.innerHTML = "Dark";
        logo.src = "assets/images/logo.png";
    }
}

src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
integrity = "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4";
crossorigin = "anonymous";