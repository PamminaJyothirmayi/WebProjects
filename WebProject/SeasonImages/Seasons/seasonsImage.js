let springBtnEl = document.getElementById("springBtn");
let summerBtnEl = document.getElementById("summerBtn");
let autumnBtnEl = document.getElementById("autumnBtn");
let winterBtnEl = document.getElementById("winterBtn");

let seasonSmallImageEl = document.getElementById("seasonSmallImage");
let seasonMediumImageEl = document.getElementById("seasonMediumImage");

function changeSeasonToSpring() {
    seasonSmallImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
    seasonMediumImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
}

function changeSeasonToSummer() {
    seasonSmallImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    seasonMediumImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
}

function changeSeasonToAutumn() {
    seasonSmallImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    seasonMediumImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
}

function changeSeasonToWinter() {
    seasonSmallImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
    seasonMediumImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
}