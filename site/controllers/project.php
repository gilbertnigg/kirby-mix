<?php
return function ($page) {
	$seo_image = $page->images()->template('cover')->first();
	$projects = $page->siblings();
	$prev = $page->prevListed($projects);
	$next = $page->nextListed($projects);
	return [
		'seo_image' => $seo_image,
		'projects' => $projects,
		'prev' => $prev,
		'next' => $next
	];
};
