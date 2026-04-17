<?php
/** @var \Kirby\Cms\Block $block */

snippet('components/swiper', [
	'width'  => 1600,
	'height' => 1200,
	'images' => $block->blockimages()->toFiles(),
])
?>
