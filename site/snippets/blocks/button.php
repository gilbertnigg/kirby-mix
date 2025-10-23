<?php
/** @var \Kirby\Cms\Block $block */
?>

<a href="<?= $block->weblink() ?>" class="btn" <?= e($block->target()->toBool(), 'target="_blank" rel="noopener noreferrer"') ?>>
	<?= $block->text() ?>
</a>
