<?php
return function ($page) {
	if (!$seoImage = $page->images()->template('cover')->first()) {
		$seoImage = false;
	}
	return [
		'seoImage' => $seoImage
	];
};
