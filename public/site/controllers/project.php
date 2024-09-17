<?php
return function ($page) {
	$seoImage = $page->images()->template('cover')->first();
	$projects = $page->siblings();
	$prev = $page->prevListed($projects);
	$next = $page->nextListed($projects);
	return [
		'seoImage' => $seoImage,
		'projects' => $projects,
		'prev' => $prev,
		'next' => $next
	];
};
