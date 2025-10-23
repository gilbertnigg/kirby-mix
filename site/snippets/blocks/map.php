<?php
/** @var \Kirby\Cms\Block $block */
?>

<div class="__aspect is-16x9">
	<iframe src="https://maps.google.com/maps?q=<?= urlencode($block->query()) ?>&z=<?= $block->zoom() ?>&t=<?= $block->maptype()->value() ?>&output=embed" class="w-full h-full border-0" allowfullscreen loading="lazy"></iframe>
</div>
