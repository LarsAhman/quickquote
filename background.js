var menuItem = {
	"id": "getQuote",
	"title": "Quick Quote",
	"contexts":["selection"]
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
	if(clickData.menuItemId == "getQuote" && clickData.selectionText) {

		chrome.storage.sync.clear();

		chrome.storage.sync.set({'symbol':clickData.selectionText});

		$('#symbolData').each(function (i, value) {
			$(this).text("");
		});

		$.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+ clickData.selectionText +'&apikey=L8DY245APU25G8PP', function(data) {

			var lastRefresh = data["Meta Data"]["3. Last Refreshed"];
			
			var latestData = data["Time Series (Daily)"][lastRefresh.substring(0,10)];

			var price = latestData["4. close"];

			var volume = latestData["5. volume"];

			chrome.storage.sync.set({'price':price});

			chrome.storage.sync.set({'volume':volume});

		});


	}
});