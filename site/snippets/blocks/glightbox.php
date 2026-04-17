<?php
/** @var \Kirby\Cms\Block $block */

snippet('components/glightbox', [
	'id'     => 'glightbox-'.$page->uid(),
	'images' => $block->blockimages()->toFiles(),
])
?>
