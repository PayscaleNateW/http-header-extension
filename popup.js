  
var header = document.getElementById("url");
var detailsTable = document.getElementById("details");
var headerTable = document.getElementById("headers");

var query = { active: true, currentWindow: true };
function updateTable(tabs) {
  url = tabs[0].url;
  header.innerHTML = 'URL: <a href="' + url + '">' + url + '</a>';
  var details = JSON.parse(localStorage.getItem(url));
  var date = new Date(details.timeStamp).toTimeString();
  detailsTable.innerHTML = "<tr> \
                              <td>URL</td> \
                              <td>" + url + "</td> \
                            <tr> \
                            <tr> \
                              <td>Method</td> \
                              <td>" + details.method + "</td> \
                            <tr> \
                            <tr> \
                              <td>Status Code</td> \
                              <td>" + details.statusCode + "</td> \
                            <tr> \
                            <tr> \
                              <td>Time</td> \
                              <td>" + date + "</td> \
                            <tr> \
                           "
  var responseHeaders = details.responseHeaders;
  if (responseHeaders) {
    headerTable.innerHTML = "";
    for (var i = 0; i < responseHeaders.length; i++) {
      var responseHeader = responseHeaders[i];
      var tr = "<tr>";
      var name = "<td>" + responseHeader.name + "</td>";
      var value = "<td>" + responseHeader.value + "</td>";
      tr += name + value + "</tr>";
      headerTable.innerHTML += tr;
    }
  }
}
chrome.tabs.query(query, updateTable);
