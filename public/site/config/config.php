<?php

return [
	'debug' => ( // enable debug mode for local testing
		stripos($_SERVER['HTTP_HOST'], 'test') === true  ? true : false
	),
	'auth' => [
		'methods' => ['password', 'password-reset']
	],
	'thumbs' => [ // choose im for local testing
		'driver' => stripos($_SERVER['HTTP_HOST'], 'test') === true  ? 'im' : 'gd'
	],
	// 'languages' => true,
	'panel' => [
		'language' => 'de',
		// 'css' => 'assets/css/custom-panel.css',
		'favicon' => '../favicon.ico',
		'slug' => 'admin'
	],
];
