'use strict';

svg4everybody();
(function() {
	var iterate = function iterate(items, callback) {
		items.forEach(function(item) {
			var key = void 0;
			var value = void 0;

			if (typeof item === 'string') {
				key = item;
				value = item;
			} else {
				key = item[0];
				value = item[1];
			}

			callback(key, value);
		});
	};

	var check = function check(category, items) {
		iterate(items, function(key, value) {
			if (bowser[key]) {
				document.documentElement.classList.add('is-' + category + '-' + value);
			}
		});
	};

	check('engine', ['blink', 'gecko', ['msedge', 'edge'],
		['msie', 'ie'], 'webkit'
	]);

	check('device', ['mobile', 'tablet']);

	check('browser', ['android', 'bada', 'blackberry', 'chrome', 'firefox', 'ios', 'kMeleon', ['msedge', 'edge'],
		['msie', 'ie'], 'opera', 'phantom', 'qupzilla', 'safari', 'sailfish', ['samsungBrowser', 'samsung'], 'seamonkey', 'silk', 'sleipnir', 'tizen', 'ucbrowser', 'vivaldi', 'webos', ['yandexbrowser', 'yandex']
	]);

	check('os', ['android', 'bada', 'blackberry', 'chromeos', 'firefoxos', 'ipad', 'iphone', 'ipod', 'ios', 'linux', 'mac', 'windows', 'windowsphone', 'sailfish', 'tizen', 'webos']);
})();

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

$document.ready(function() {
	$('#jsslider').roundSlider({
		sliderType: 'min-range',
		editableTooltip: false,
		radius: 150,
		width: 60,
		min: 0,
		max: 1000,
		value: 444,
		handleSize: 0,
		handleShape: 'square',
		circleShape: 'half-top',
		tooltipFormat: 'changeTooltip'
	});

	function changeTooltip(e) {
		var val = e.value,
			speed = void 0;

		return val;
	}
});
