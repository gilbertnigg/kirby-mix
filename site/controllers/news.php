<?php
return function ($page) {
	// Handle POST request, if any redirect to GET with params
	if (isset($_POST['tag']) || isset($_POST['searchQuery'])) {
		go(url($page->url(), [
			'params' => [
				'suche' => $_POST['searchQuery'] ?? '',
				'tag'   => $_POST['tag'] ?? '',
			]
		]).'#top');
		return;
	}

	// Handle GET request (if)
	$filtered     = false;
	$searchQuery  = param('suche', false);
	$tagsAll      = $page->children()->template('tags')->children()->template('tag')->listed();
	$tagSelected  = param('tag', false);
	$tagPage      = $page->children()->template('tags')->first()->children()->listed()->findBy('uid', $tagSelected);
	$newsAll      = $page->children()->template('post')->listed();
	$tagsFiltered = new \Kirby\Cms\Pages();
	$newsFiltered = $newsAll;
	// Filter (un)used tags
	foreach ($tagsAll as $tag) {
		$count = $newsAll->filterBy('tags', $tag->uuid(), ',')->count();
		if ($count) $tagsFiltered->add($tag);
	}
	// Filter news
	if ($searchQuery) {
		$newsFiltered = $newsFiltered->search($searchQuery);
		$filtered = true;
	}
	if ($tagPage) {
		$newsFiltered = $newsFiltered->filterBy('tags', $tagPage->uuid(), ',');
		$filtered = true;
	}
	return [
		'filtered'    => $filtered,
		'searchQuery' => $searchQuery,
		'tagsAll'     => $tagsAll,
		'tagSelected' => $tagSelected,
		'tags'        => $tagsFiltered,
		'news'        => $newsFiltered,
	];
};
