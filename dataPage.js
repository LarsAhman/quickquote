$(function() {

	chrome.storage.sync.get(['symbol', 'price', 'volume'], function (items) {

		$('#symbol').text(items.symbol);

		$('#price').text(items.price);

		$('#volume').text(items.volume);

		if (!(items.price)) {
			$('#error').text("Couldn't find data for this symbol.");
		}

	})
});