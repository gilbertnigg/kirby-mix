<?php
use Kirby\Cms\Html;

/** @var \Kirby\Cms\Block $block */
?>
<?php if ($block->location() == 'web' && $video = Html::video($block->url())) : ?>
<figure class="block [&>iframe]:w-full [&>iframe]:aspect-video">
	<?= $video ?>
	<?php if ($block->caption()->isNotEmpty()): ?>
	<figcaption><?= $block->caption() ?></figcaption>
</figure>
<?php endif ?>
<?php elseif ($video = $block->video()->toFile()) : ?>
<figure class="block">
	<video src="<?= $video->url() ?>" class="w-full"
		<?= A::join($block->settings()->split(','), ' ') ?>
	></video>
	<?php if ($video->caption()->isNotEmpty()): ?>
	<figcaption><?= $video->caption() ?></figcaption>
	<?php endif ?>
</figure>
<?php endif ?>
