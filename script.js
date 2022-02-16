"use strict";

// Hamburger nav
var btn = document.querySelector(".fancy-burger");
var links = document.getElementsByClassName("link");
var list = document.getElementById("hamburger-list");


btn.addEventListener("click", () => {
    btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
});

for (var x of links) {
    x.addEventListener("click", function () {
        for (var x of links) {
            x.classList.remove("active");
        }
        this.classList.add("active");
    });
}
window.addEventListener("resize", function () {
    list.classList.remove("width");
    btn.classList.remove("open");
    for (var x of links) {
        x.classList.remove("active");
    }
});