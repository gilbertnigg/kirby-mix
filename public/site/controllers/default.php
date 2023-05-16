<?php
return function ($page) {
	$cover = $page->images()->template('cover')->first();
	$imgs = $page->images()->template('image')->sortBy('sort', 'asc', 'filename', 'asc');
	return [
		'cover' => $cover,
		'imgs' => $imgs
	];
};
