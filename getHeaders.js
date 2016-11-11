function onHeadersReceivedCallback(details) {
  localStorage.setItem(details.url, JSON.stringify(details));
}

chrome.webRequest.onHeadersReceived.addListener(onHeadersReceivedCallback, {urls: ["<all_urls>"], types: ["main_frame"]}, ["blocking", "responseHeaders"]);
