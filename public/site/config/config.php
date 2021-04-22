<?php

return [
    'debug' => (
		in_array($_SERVER['HTTP_HOST'], ['projects', 'testserver.com']) ? true : false
	),
	'auth' => [
		'methods' => ['password', 'password-reset']
	],
	// 'languages' => true,
	'panel' => [
		'language' => 'de',
		'css' => 'assets/css/custom-panel.css',
		'slug' => 'admin'
	],
	'thumbs' => [ // fix png opacity, no ImageMagick on local MAMP default
		'driver' => in_array($_SERVER['HTTP_HOST'], ['projects']) ? 'gd' : 'im'
	],
];
