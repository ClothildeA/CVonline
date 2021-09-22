"use strict";

// I will be creating a different pen with touch support but right // now I have no time for it due to school
var slider = document.querySelector(".items");
var slides = document.querySelectorAll(".item");
var button = document.querySelectorAll(".button");
var current = 0;
var prev = 4;
var next = 1;

var _loop = function _loop(i) {
  button[i].addEventListener("click", function () {
    return i == 0 ? gotoPrev() : gotoNext();
  });
};

for (var i = 0; i < button.length; i++) {
  _loop(i);
}

var gotoPrev = function gotoPrev() {
  return current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
};

var gotoNext = function gotoNext() {
  return current < 4 ? gotoNum(current + 1) : gotoNum(0);
};

var gotoNum = function gotoNum(number) {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (var _i = 0; _i < slides.length; _i++) {
    slides[_i].classList.remove("active");

    slides[_i].classList.remove("prev");

    slides[_i].classList.remove("next");
  }

  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};