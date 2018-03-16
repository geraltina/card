"use strict";

var navMenu = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var pageHeader = document.querySelector(".page-header__nav-wrapper");

navMenu.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function (evt) {
  if (navMenu.classList.contains("main-nav--closed")) {
    navMenu.classList.remove("main-nav--closed");
    navMenu.classList.add("main-nav--opened");
    pageHeader.classList.add("page-header__nav-wrapper--opened");
  } else {
    navMenu.classList.remove("main-nav--opened");
    navMenu.classList.add("main-nav--closed");
    pageHeader.classList.remove("page-header__nav-wrapper--opened");
  }
});
