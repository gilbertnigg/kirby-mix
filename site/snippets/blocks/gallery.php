<?php
/** @var \Kirby\Cms\Block $block */
?>
<div class="grid grid-cols-2 gap-2 items-center md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
    <?php foreach ($block->gallery()->toFiles() as $image) :
	$thumb = $image->thumb(['width'=>800, 'height'=>800]);
	?>
    <a href="<?= $image->url() ?>" class="inline-block no-underline" target="_blank">
        <img src="<?= $thumb->url() ?>" width="<?= $thumb->width() ?>" height="<?= $thumb->height() ?>"
            alt="<?= $image->alt()->esc() ?>" loading="lazy">
    </a>
    <?php endforeach ?>
    </figure>
</div>
