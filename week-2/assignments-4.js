let banner = document.getElementsByClassName("headline")[0];

banner.addEventListener("click", () => {
    banner.innerHTML = "Have a GoodTime!";
});

//漢堡包code
const nav = document.querySelector(".nav-bar");
const mainnav = document.querySelector(".main-nav");

nav.addEventListener("click", () => {
    nav.classList.toggle("active");
    mainnav.classList.toggle("active");
});

//點擊更多code
const item1 = document.querySelector(".item1");
const more = document.querySelector(".more");

item1.addEventListener("click", () => {
    more.classList.toggle("active");
});
