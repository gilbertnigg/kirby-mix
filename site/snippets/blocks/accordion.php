<?php
/** @var \Kirby\Cms\Block $block */

snippet('components/accordion', [
	'id'    => $block->id(),
	'items' => $block->accordion()->toStructure(),
])
?>
