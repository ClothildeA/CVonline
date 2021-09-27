"use strict";

var threshold = .1;
var options = {
  root: null,
  rootMargin: '0px',
  threshold: threshold
};

var handleIntersect = function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add('reveal-loaded');
      observer.unobserve(entry.target);
    }
  });
};

window.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(handleIntersect, options);
  var targets = document.querySelectorAll('.reveal');
  targets.forEach(function (target) {
    observer.observe(target);
  });
});