var nav_img = document.getElementById("img_nav");
var nav = document.getElementById("nav");

nav_img.addEventListener("click", function () {
    if (nav.style.display == "flex")
        nav.style.display = "none";
    else
        nav.style.display = "flex";
})
