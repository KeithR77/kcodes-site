//Changes the design of the navigational bar once the Y scroll of the site user is greater than 100
//If it becomes less than 100, the navigational bar will gradually return to its original design
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 50);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

//Checks and stores the date the page was last modified (may implement within site footer in future)
var latestDate = new Date(document.lastModified);
document.getElementById("modifiedText").innerHTML = latestDate;
