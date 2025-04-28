// Set display to lightmode

function darkMode() {
    document.querySelector("body") .className = "body-darkmode";
    document.querySelector("header") .className = "header-darkmode";
    document.querySelector("section") .className = "section-darkmode";
    document.querySelector("footer") .className = "footer-darkmode";
}

function lightMode() {
    document.querySelector("body") .className = "body-lightmode";
    document.querySelector("header") .className = "header-lightmode";
    document.querySelector("section") .className = "section-lightmode";
    document.querySelector("footer") .className = "footer-lightmode";
}