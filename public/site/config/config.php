<?php

return [
    'debug' => (
		in_array($_SERVER['HTTP_HOST'], ['localhost', 'testserver.com']) ? true : false
	),
	'auth' => [
		'methods' => ['password', 'password-reset']
	],
	// 'languages' => true,
	'panel' => [
		'language' => 'de',
		// 'css' => 'assets/css/custom-panel.css',
		'favicon' => '../favicon.ico',
		'slug' => 'admin'
	],
];
