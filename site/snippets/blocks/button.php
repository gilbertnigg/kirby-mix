<?php
/** @var \Kirby\Cms\Block $block */
?>

<a href="<?= $block->weblink() ?>" class="btn"
    <?= $block->target()->toBool() ? 'target="_blank" rel="noopener noreferrer"' : '' ?>>
    <?= $block->text() ?>
</a>
