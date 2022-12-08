<?php
/**
 * @var Kirby\Cms\File $img
 * @var array|int $size
 * @var string $alt
 * @var string $class
 */

if (is_array($size)) {
	$img_width  = $size[0];
	$img_height = $size[1];
	$crop = true;
} else {
	$img_width  = $size;
	$img_height = 0;
	$crop = false;
}
$alt = $img->alt() ?: $page->title();
$class = $class ?? '';
?>

<picture>
<source
	type="image/webp"
	srcset="<?= $img->srcset([
		'1x'=>['width'=>$img_width, 'height'=>$img_height, 'crop'=>$crop, 'format'=>'webp'],
		'2x'=>['width'=>($img_width * 2), 'height'=>($img_height * 2), 'crop'=>$crop, 'format'=>'webp']
	]) ?>">
<img
	src="<?= $img->thumb(['width'=>$img_width, 'height'=>$img_height, 'crop'=>$crop])->url() ?>"
	width="<?= $img_width ?>"
	height="<?= $img_height ?: round($img_width * $img->ratio()) ?>"
	alt="<?= $alt ?>"
	class="<?= $class ?>"
	loading="lazy"
	>
</picture>
