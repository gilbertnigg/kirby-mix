<?php /** @var \Kirby\Cms\Block $block */ ?>

<?php if ($image = $block->image()->toFile()) : ?>
<figure>
	<picture>
		<img
		srcset="<?= $cover->srcset([
			'800w'  => ['width' => 800, 'format' => 'webp'],
			'1600w'  => ['width' => 1600, 'format' => 'webp'],
		])?>"
		sizes="(min-width: 1000px) 100vw"
		src="<?= $image->resize(1600)->url() ?>" alt="<?= $image->alt()->esc()->or($page->title()) ?>">
	</picture>
</figure>
<?php endif ?>
