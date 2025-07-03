<?php

return [
	'auth' => [
		'methods' => ['password', 'password-reset']
	],
	'cache' => [
		'pages' => [
			'active' =>  false
		],
	],
	// 'languages' => true,
	'panel' => [
		'language' => 'de',
		'favicon' => '../favicon.ico',
		'slug' => 'admin'
		// 'css' => 'assets/css/custom-panel.css',
	],
	'routes' => [
		[
			'pattern' => 'sitemap.xml',
			'action'  => function() {
				$pages = site()->pages()->index()->listed();
				// fetch the pages to ignore from the config settings,
				// if nothing is set, we ignore the error page
				$ignore = kirby()->option('sitemap.ignore', []);
				$content = snippet('sitemap', compact('pages', 'ignore'), true);
				// return response with correct header type
				return new Kirby\Cms\Response($content, 'application/xml');
			}
		],
		[
			'pattern' => 'sitemap',
			'action'  => function() {
				return go('sitemap.xml', 301);
			}
		]
	],
	'sitemap.ignore' => ['error', 'footer-index'],
];
