<?php
/**
 * $ npm install masonry-layout
 *
 * @var \Kirby\Files $images
 * @var int $width
 * @var int $height
*/
?>

<?php if ($items->count()) : ?>
<div class="__masonry">
    <div class="masonry-sizer"></div>
    <div class="masonry-gutter-sizer"></div>
    <?php foreach ($items as $img) :
	$thumb = $img->thumb(['width'=>$width, 'height'=>$height]); ?>
    <div class="masonry-item">
        <img src="<?= $thumb->url() ?>" width="<?= $thumb->width() ?>" height="<?= $thumb->height() ?>"
            alt="<?= $img->alt()->esc() ?>" loading="lazy">
    </div>
    <?php endforeach ?>
</div>
<?php endif ?>
