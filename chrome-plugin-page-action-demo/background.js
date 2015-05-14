function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
	
	if(getDomainFromUrl(tab.url).toLowerCase()=="signup.live.com"){
		chrome.pageAction.show(tabId);
	}
	
	var domain = getDomainFromUrl(tab.url).toLowerCase();
	
	if(domain.match(/\w*?\.mail\.live\.com/)!=null){
		chrome.pageAction.show(tabId);
		
		
		
	}else{
		
	
	}
};



chrome.tabs.onUpdated.addListener(checkForValidUrl); //到達網域就開始顯示圖示

