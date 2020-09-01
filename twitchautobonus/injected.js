var selector =
  "div.tw-full-height.tw-relative.tw-z-above > div > div > div > button";
var element = null;
var handler = function () {
  element = document.querySelector(selector);
  if (element) {
    element.click();
    element = null;
  }
};

setInterval(handler, 5000);
