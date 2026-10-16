<?php
/** @var \Kirby\Cms\Block $block */

if ($block->target()->value() === "external") {
	if ($block->weblink()->isNotEmpty()) {
    	$url = $block->weblink()->toUrl();
	} else {
		return;
	}
    $target = 'target="_blank" rel="noopener noreferrer"';
} else {
	if ($block->pagelink()->isNotEmpty()) {
    	$url = $block->pagelink()->toPage()->url();
	} else {
		return;
	}
    $target = '';
}
?>

<a href="<?= $url ?>" class="btn"
    <?= $target ?>>
    <?= $block->text() ?>
</a>
