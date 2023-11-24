<?php

/** @var \Kirby\Cms\Block $block */
$alt     = $block->alt();
$src     = null;

if ($block->location() == 'web') {
    $src = $block->src()->esc();
} elseif ($image = $block->image()->toFile()) {
    $alt = $alt->or($image->alt());
    $src = $image->url();
}

?>
<?php if ($src): ?>
<figure>
	<img src="<?= $src ?>" alt="<?= $alt->esc() ?>">
</figure>
<?php endif ?>
