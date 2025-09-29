<?php /** @var \Kirby\Cms\Block $block */ ?>

<?php if ($image = $block->image()->toFile()) : ?>
<div>
	<img
	srcset="<?= $image->srcset([
		'800w'  => ['width' => 800, 'format' => 'webp'],
		'1600w'  => ['width' => 1600, 'format' => 'webp'],
	]) ?>"
	src="<?= $image->resize(1600)->url() ?>"
	sizes="(min-width: 1000px) 100vw"
	width="<?= $image->width() ?>" height="<?= $image->height() ?>"
	alt="<?= $image->alt()->esc() ?>">
</div>
<?php endif ?>
