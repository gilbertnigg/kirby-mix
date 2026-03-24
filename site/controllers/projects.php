<?php
return function ($kirby, $page) {
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
	$filtered         = false;
	$searchQuery      = param('suche', false);
	$tagsAll          = $page->children()->template('tags')->children()->template('tag')->listed();
	$tagSelected      = param('tag', false);
	$tagPage          = $page->children()->template('tags')->first()->children()->listed()->findBy('uid', $tagSelected);
	$projectsAll      = $page->children()->template('project')->listed();
	$tagsUsed		  = new \Kirby\Cms\Pages();
	$projectsFiltered = $projectsAll;
	// Filter (un)used tags
	foreach ($tagsAll as $tag) {
		$count = $projectsAll->filterBy('tags', $tag->uuid(), ',')->count();
		if ($count) $tagsUsed->add($tag);
	}
	// Filter projects
	if ($searchQuery) {
		$projectsFiltered = $projectsFiltered->search($searchQuery);
		$filtered = true;
	}
	if ($tagPage) {
		$projectsFiltered = $projectsFiltered->filterBy('tags', $tagPage->uuid(), ',');
		$filtered = true;
	}
	return [
		'filtered'    => $filtered,
		'searchQuery' => $searchQuery,
		'tags'        => $tagsAll,
		'tagSelected' => $tagSelected,
		'tagsUsed'    => $tagsUsed,
		'projects'    => $projectsFiltered,
	];
};
