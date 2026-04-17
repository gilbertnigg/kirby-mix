<?php
/** @var \Kirby\Cms\Block $block */

snippet('components/masonry', [
	'width'  => 800,
	'height' => 600,
	'items'  => $block->blockimages()->toFiles(),
])
?>
