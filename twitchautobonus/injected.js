const selector = "div.tw-full-height.tw-relative.tw-z-above > div > div > div > button";
const handler = function() {
	const el = document.querySelector(selector);
	if (el) el.click();
}

setInterval(handler, 5000);