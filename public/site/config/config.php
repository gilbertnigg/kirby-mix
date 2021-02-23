<?php

return [
    'debug' => true,
    'panel' => [
        'language' => 'de',
        'slug' => 'admin'
    ],
	'auth' => [
		'methods' => ['password', 'password-reset']
	],
	'thumbs' => [ // fix png opacity
		'driver' => 'im'
	]
];
