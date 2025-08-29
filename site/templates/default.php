<?php snippet('header') ?>

<article class="__center">
    <?php if ($cover = $page->images()->template('cover')->first()) : ?>
    <img srcset="<?= $cover->srcset([
			'800w'  => ['width' => 1000, 'height' => 1000, 'crop'=>true, 'format' => 'webp'],
			'1600w'  => ['width' => 2400, 'format' => 'webp']])?>" sizes="100vw"
        src="<?= $cover->thumb(['width'=>1400])->url() ?>" class="w-full"
        alt="<?= $cover->alt()->or($site->title()) ?>">
    <?php endif ?>

    <?php if ($cover = $page->cover()->toFile()) :
	$img   = $cover->thumb(['width' => 2400]);
	$thumb = $cover->thumb(['width' => 2400, 'format' => 'webp']); ?>
    <p>
        <img srcset="<?= $thumb->url() ?>" src="<?= $img->url() ?>" width="<?= $thumb->width() ?>"
            height="<?= $thumb->height() ?>" alt="<?= $cover->alt()->or($site->title()) ?>">
    </p>
    <?php endif ?>

    <h1><?= $page->title() ?></h1>
    <?php if ($page->headline()->isNotEmpty()) : ?>
    <h2><?= $page->headline()->kti() ?></h2>
    <?php endif ?>

    <?= $page->text() ?>

    <?php if ($page->children()->listed()->count()) : ?>
    <hr>
    <h2>Subpages</h2>
    <div class="__grid is-row">
        <?php foreach ($page->children()->listed() as $subpage) : ?>
        <div>
            <a href="<?= $subpage->url() ?>">
                <?= $subpage->title() ?>
            </a>
        </div>
        <?php endforeach ?>
    </div>
    <?php endif ?>


    <?php if ($page->images()->template('image')->count()) : ?>
    <hr>
    <h2>Images</h2>
    <div class="__grid is-row">
        <?php foreach ($page->images()->template('image')->sortBy('sort', 'asc', 'filename', 'asc') as $img) : ?>
        <div>
            <img src="<?= $img->thumb(['width'=>1600])->url() ?>" alt="<?= $img->alt() ?>">
        </div>
        <?php endforeach ?>
    </div>
    <?php endif ?>


    <?php if ($page->files()->template('file')->count()) : ?>
    <hr>
    <h2>Files</h2>
    <ul>
        <?php foreach ($page->files()->template('file')->sortBy('sort', 'asc', 'filename', 'asc') as $file) : ?>
        <li>
            <a href="<?= $file->url() ?>" target="_blank" rel="noopener noreferrer">
                <?= $file->description()->or($file->name()) ?>
            </a>
        </li>
        <?php endforeach ?>
    </ul>
    <?php endif ?>


    <?php
	$news = $pages->template('news')->children()->template('post')->listed()->sortBy('date', 'desc');
	if ($news->count()) : ?>
    <hr>
    <h2>Posts</h2>
    <div class="__grid">
        <?php foreach ($news as $post) : ?>
        <a href="<?= $post->url() ?>" class="block no-underline">
            <?php if ($img = $post->cover()->toFile()) :
			$thumb = $img->thumb(['width'=>800, 'height'=>600, 'crop'=>true]); ?>
            <p>
                <img src="<?= $thumb->url() ?>" width="<?= $thumb->width() ?>" height="<?= $thumb->height() ?>"
                    alt="<?= $img->alt()->or($post->title()) ?>" loading="lazy">
            </p>
            <?php endif ?>
            <span class="block">
                <h3><?= $post->title() ?></h3>
                <?= $post->date()->toDate('d.m.Y') ?><br>
                <?php if ($post->headline()->isNotEmpty()) : ?>
                <?= $post->headline()->kti() ?>
                <?php endif ?>
            </span>
        </a>
        <?php endforeach ?>
    </div>
    <?php endif ?>

    <?php if ($page->blocks()->isNotEmpty()) : ?>
    <hr>
    <h2>Blocks</h2>
    <div class="__blocks">
        <?php foreach ($page->blocks()->toBlocks() as $block) : ?>
        <div id="<?= $block->id() ?>" class="__block is-type-<?= $block->type() ?>">
            <?= $block ?>
        </div>
        <?php endforeach ?>
    </div>
    <?php endif ?>

</article>

<?php snippet('footer') ?>
