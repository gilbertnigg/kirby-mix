<?php
return function ($page) {
	$seoImage = $page->images()->template('cover')->first();
	return [
		'seoImage' => $seoImage
	];
};
