<?php
/**
 * @var array|int image_size
 * @var string alt
 * @var string class
 */

if (is_array($image_size)) {
	$img_width  = $image_size[0];
	$img_height = $image_size[1];
	$crop = true;
} else {
	$img_width  = $image_size;
	$img_height = 0;
	$crop = false;
}
if (!isset($alt) || !$alt) $alt   = $page->title();
if (!isset($class))        $class = '';

?>
<picture>
<source
	type="image/webp"
	srcset="<?= $image->srcset([
		'1x'=>['width'=>$img_width, 'height'=>$img_height, 'crop'=>$crop, 'format'=>'webp'],
		'2x'=>['width'=>($img_width*2), 'height'=>($img_height*2), 'crop'=>$crop, 'format'=>'webp']
	]) ?>">
<img
	src="<?= $image->thumb(['width'=>$img_width, 'height'=>$img_height, 'crop'=>$crop])->url() ?>"
	width="<?=	$img_width  ?: round($img_height*$image->ratio()) ?>"
	height="<?=	$img_height ?: round($img_width*$image->ratio()) ?>"
	alt="<?= $alt ?>"
	class="<?= $class ?>"
	>
</picture>
