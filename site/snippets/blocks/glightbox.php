<?php
/**
 * @var \Kirby\Cms\Block $block
 * @var \Kirby\Cms\Page $page
*/

snippet('components/glightbox', [
	'id'     => 'glightbox-'.$page->uid(),
	'images' => $block->blockimages()->toFiles(),
])
?>
