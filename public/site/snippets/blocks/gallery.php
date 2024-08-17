<?php
/** @var \Kirby\Cms\Block $block */
?>
<figure class="__grid items-center">
	<?php foreach ($block->images()->toFiles() as $image): ?>
	<a href="<?= $image->url() ?>" class="no-underline" target="_blank">
		<?= $image->thumb(['width'=>800, 'height'=>600, 'crop'=>true]) ?>
	</a>
	<?php endforeach ?>
</figure>
