<?php
/** @var \Kirby\Cms\Block $block */
?>
<figure class="__grid items-center">
	<?php foreach ($block->images()->toFiles() as $image): ?>
	<a href="<?= $image->url() ?>" class="no-underline">
		<?= $image ?>
	</a>
	<?php endforeach ?>
</figure>
