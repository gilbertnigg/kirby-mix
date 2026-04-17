<?php
/**
 * $ npm install glightbox
 *
 * @var \Kirby\Cms\Files $images
 * @var String $id
 */
?>

<div class="grid grid-cols-2 gap-2 items-center md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
    <?php foreach ($images as $image): ?>
    <a href="<?= $image->url() ?>" class="glightbox" target="_blank" data-gallery="<?= $id ?>"
        data-glightbox="description: <?= $image->alt() ?>">
        <img src="<?= $image->thumb(['width'=>800, 'height'=>600, 'sharpen'=>true, 'crop'=>true])->url() ?>"
            loading="lazy" width="800" height="600" alt="<?= $image->alt()->or($page->title()) ?>">
    </a>
    <?php endforeach ?>
</div>
