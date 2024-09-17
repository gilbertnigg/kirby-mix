<?php

return [
	'debug' => ( // enable debug mode for local testing
		stripos($_SERVER['HTTP_HOST'], 'test') !== false  ? true : false
	),
	'auth' => [
		'methods' => ['password', 'password-reset']
	],
	'thumbs' => [ // choose im for local testing
		'driver' => stripos($_SERVER['HTTP_HOST'], 'test') !== false  ? 'gd' : 'im'
	],
	// 'languages' => true,
	'panel' => [
		'language' => 'de',
		// 'css' => 'assets/css/custom-panel.css',
		'favicon' => '../favicon.ico',
		'slug' => 'admin'
	],
];
