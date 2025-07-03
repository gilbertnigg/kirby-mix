<?php
/** @var \Kirby\Cms\Block $block */
?>
<div class="grid grid-cols-2 gap-2 items-center md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
<?php foreach ($block->images()->toFiles() as $image): ?>
	<a href="<?= $image->url() ?>" class="no-underline" target="_blank">
		<?= $image->thumb(['width'=>800, 'height'=>800]) ?>
	</a>
	<?php endforeach ?>
</figure>
