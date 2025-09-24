<?php
use Kirby\Cms\Html;
use Kirby\Toolkit\A;

/** @var \Kirby\Cms\Block $block */
?>
<?php if ($block->location() == 'web' && $video = Html::video($block->url())) : ?>
<figure class="block">
    <div class="__aspect is-16x9">
        <?= $video ?>
    </div>
    <?php if ($block->caption()->isNotEmpty()): ?>
    <figcaption><?= $block->caption() ?></figcaption>
    <?php endif ?>
</figure>
<?php elseif ($video = $block->video()->toFile()) : ?>
<figure class="block">
    <video src="<?= $video->url() ?>" class="w-full" playsinline
        <?= A::join($block->settings()->split(','), ' ') ?>></video>
    <?php if ($video->caption()->isNotEmpty()): ?>
    <figcaption><?= $video->caption() ?></figcaption>
    <?php endif ?>
</figure>
<?php endif ?>
