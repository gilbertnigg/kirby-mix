<?php
use Kirby\Cms\Html;

/** @var \Kirby\Cms\Block $block */
?>
<?php if ($video = Html::video($block->url())): ?>
<figure class="[&>iframe]:aspect-video [&>iframe]:w-full">
	<?= $video ?>
	<?php if ($block->caption()->isNotEmpty()): ?>
	<figcaption><?= $block->caption() ?></figcaption>
	<?php endif ?>
</figure>
<?php endif ?>
