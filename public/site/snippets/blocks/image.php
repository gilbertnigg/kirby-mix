<?php /** @var \Kirby\Cms\Block $block */ ?>

<?php if ($image = $block->image()->toFile()) :
$img_size = $block->image_size()->value(); ?>
<figure class="block my-12 <?= ($img_size==='sm' ? 'w-1/3' : ($img_size==='md' ? 'w-2/3' : 'w-full')) ?>">
	<picture>
		<img
		srcset="<?= $image->srcset([
			'800w'  => ['width' => 800, 'format' => 'webp'],
			'1600w'  => ['width' => 1600, 'format' => 'webp'],
		])?>"
		sizes="(min-width: 1000px) 100vw"
		src="<?= $image->resize(1600)->url() ?>" alt="<?= $image->alt()->esc()->or($page->title()) ?>">
	</picture>
</figure>
<?php endif ?>
