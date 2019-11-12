var actualCode = `
    setInterval(function(){
    	if(document.querySelector("div > div.tw-block.tw-flex-grow-0.tw-flex-shrink-0.tw-full-height.tw-relative > div > div > section > div > div.chat-input.tw-block.tw-pd-b-1.tw-pd-x-1 > div:nth-child(2) > div.chat-input__buttons-container.tw-flex.tw-justify-content-between.tw-mg-t-1 > div:nth-child(1) > div > div > div > div.tw-full-height.tw-relative.tw-z-above > div > div > div > button")){
			document.querySelector("div > div.tw-block.tw-flex-grow-0.tw-flex-shrink-0.tw-full-height.tw-relative > div > div > section > div > div.chat-input.tw-block.tw-pd-b-1.tw-pd-x-1 > div:nth-child(2) > div.chat-input__buttons-container.tw-flex.tw-justify-content-between.tw-mg-t-1 > div:nth-child(1) > div > div > div > div.tw-full-height.tw-relative.tw-z-above > div > div > div > button").click()
		}
	}, 2000)
`;    // Check for and clicks the bonus button every 2 seconds
var e = document.createElement("script"); //create script object
e.appendChild(document.createTextNode(actualCode)), (document.head || document.documentElement).appendChild(e), e.parentNode.removeChild(e) //insert code into script object
